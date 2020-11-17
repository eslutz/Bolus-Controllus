import { Component } from '@angular/core';
import { HistoryService } from '../Services/history.service';
import { UserService } from '../Services/user.service';
import { FullUser } from '../interfaces/User';
import { HistoryItem } from '../interfaces/History';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalUser } from '../globaluser';

@Component({
    selector: 'app-calculation',
    templateUrl: './calculation.component.html',
    styleUrls: ['./calculation.component.css']
})
/** calculation component*/
export class CalculationComponent {
  user: FullUser = {
    userID: -1,
    username: 'test',
    carbRatio: 0,
    correctionRatio: 0,
    duration: 0
  };
  newHistory: HistoryItem = {
    id: -1,
    userID: -1,
    bloodGlucose: 0,
    carbs: 0,
    insulin: 0,
    time: new Date()
  };
  targetBG: number = 100;
  recommendedBolus: number = 0;
  currentBG: number = 100;
  carbs: number = 0;
  message: string = "";
  active: boolean = true;

  /** calculation ctor */
  constructor(private userService: UserService, private historyService: HistoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.userService.GetAllUserSettings(GlobalUser.userID).subscribe((data) => this.user = data), 50);
    this.route.queryParams.subscribe(params => this.carbs = params.carbs);
    if (this.carbs == undefined) {
      this.carbs = 0;
    }
  }

  calculate(): number {
    if (this.currentBG >= 0 && this.carbs >= 0) {
      this.message = "";
      this.recommendedBolus = ((this.currentBG - this.targetBG) / this.user.correctionRatio) + (this.carbs / this.user.carbRatio);
      if (this.recommendedBolus < 0) {
        this.recommendedBolus = 0;
        if (this.carbs == 0) {
          this.message = "Your blood glucose is low.  Please consume some carbs.";
        }
        else {
          this.message = "Your blood glucose is low.  Please consume some more carbs.";
        }
      }
      else {
        this.message = "";
      }
      this.recommendedBolus = Math.round(this.recommendedBolus);
      this.active = true;
    }
    else {
      this.message = "You must enter a positive number.";
      this.active = false;
    }
    return this.recommendedBolus;
  }

  logBolus(): void {
    if (this.active) {
      this.newHistory.userID = GlobalUser.userID;
      this.newHistory.insulin = Number(this.recommendedBolus);
      this.newHistory.bloodGlucose = Math.round(Number(this.currentBG));
      this.newHistory.carbs = Math.round(Number(this.carbs));
      this.newHistory.time = new Date();
      this.historyService.AddHistory(this.newHistory).subscribe();
      setTimeout(() => this.router.navigate(['/home']), 50);
    }
  }
}
