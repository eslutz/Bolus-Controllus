import { Component } from '@angular/core';
import { CarbRatio, CarbRatioItem } from '../interfaces/CarbRatio';
import { CorrectionRatio, CorrectionRatioItem } from '../interfaces/CorrectionRatio';
import { InsulinDuration } from '../interfaces/InsulinDuration';
import { User } from '../interfaces/User';
import { CarbRatioService } from '../Services/carb-ratio.service';
import { CorrectionRatioService } from '../Services/correction-ratio.service';
import { InsulinDurationService } from '../Services/insulin-duration.service';
import { GlobalUser } from '../globaluser';

@Component({
    selector: 'app-insulin-settings',
    templateUrl: './insulin-settings.component.html',
    styleUrls: ['./insulin-settings.component.css']
})
/** insulin-settings component*/
export class InsulinSettingsComponent {
  user: User;
  hideCarb: boolean = true;
  hideCorrection: boolean = true;
  hideDuration: boolean = true;
  carbs: number;
  correction: number;
  duration: number;
  currentID: number = -1;
  carbRatio: CarbRatioItem = {
    id: -1,
    userID: -1,
    carbRatio: 0
  };
  correctionRatio: CorrectionRatioItem = {
    id: -1,
    userID: -1,
    correctionRatio: 0
  };
  insulinDuration: InsulinDuration = {
    id: -1,
    userID: -1,
    duration: 0
  };
  message: string = "";

  /** insulin-settings ctor */
  constructor(private carbRatioService: CarbRatioService, private correctionRatioService: CorrectionRatioService, private insulinDurationService: InsulinDurationService) { }

  ngOnInit(): void {
    setTimeout(() => this.carbRatioService.GetCarbRatio(GlobalUser.userID).subscribe((data) => this.carbRatio = data[0]), 50);
    setTimeout(() => this.correctionRatioService.GetCorrectionRatio(GlobalUser.userID).subscribe((data) => this.correctionRatio = data[0]), 50);
    setTimeout(() => this.insulinDurationService.GetDuration(GlobalUser.userID).subscribe((data) => this.insulinDuration = data), 50);
  }

  editCarbRatio(origCarbRatio: CarbRatioItem): void {
    this.carbs = origCarbRatio.carbRatio;
    this.currentID = origCarbRatio.id;
    this.hideCarb = false;
    this.hideCorrection = true;
    this.hideDuration = true;
  }

  editCorrectionRatio(correctionRatio: CorrectionRatioItem): void {
    this.correction = correctionRatio.correctionRatio;
    this.currentID = correctionRatio.id;
    this.hideCarb = true;
    this.hideCorrection = false;
    this.hideDuration = true;
  }

  editInsulinDuration(insulinDuration: InsulinDuration): void {
    this.duration = insulinDuration.duration;
    this.currentID = insulinDuration.id;
    this.hideCarb = true;
    this.hideCorrection = true;
    this.hideDuration = false;
  }

  cancel(): void {
    this.hideCarb = true;
    this.hideCorrection = true;
    this.hideDuration = true;
    this.currentID = -1;
    this.message = "";
  }

  updateCarbRatio(): void {
    if (this.carbs > 0) {
      this.carbRatio.id = this.currentID;
      this.carbRatio.userID = GlobalUser.userID;
      this.carbRatio.carbRatio = Math.round(Number(this.carbs));
      this.carbRatioService.UpdateCarbRatio(this.carbRatio).subscribe((data) => this.ngOnInit());
      this.hideCarb = true;
      this.message = "";
    }
    else {
      this.message = "Please enter a positive number.";
    }
  }

  updateCorrectionRatio(): void {
    if (this.correction > 0) {
      this.correctionRatio.id = this.currentID;
      this.correctionRatio.userID = GlobalUser.userID;
      this.correctionRatio.correctionRatio = Math.round(Number(this.correction));
      this.correctionRatioService.UpdateCorrectionRatio(this.correctionRatio).subscribe((data) => this.ngOnInit());
      this.hideCorrection = true;
      this.message = "";
    }
    else {
      this.message = "Please enter a positive number.";
    }
  }

  updateInsulinDuration(): void {
    if (this.duration > 0) {
      this.insulinDuration.id = this.currentID;
      this.insulinDuration.userID = GlobalUser.userID;
      this.insulinDuration.duration = Math.round(Number(this.duration));
      this.insulinDurationService.UpdateDuration(this.insulinDuration).subscribe((data) => this.ngOnInit());
      this.hideDuration = true;
      this.message = "";
    }
    else {
      this.message = "Please enter a positive number.";
    }
  }
}
