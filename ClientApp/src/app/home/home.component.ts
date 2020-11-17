import { Component } from '@angular/core';
import { HistoryService } from '../Services/history.service';
import { InsulinDurationService } from '../Services/insulin-duration.service';
import { User } from '../interfaces/User';
import { History, HistoryItem } from '../interfaces/History';
import { InsulinDuration } from '../interfaces/InsulinDuration';
import { UserService } from '../Services/user.service';
import { GlobalUser } from '../globaluser';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User;
  history: History;
  insulinDuration: InsulinDuration;
  activeInsulin: number;

  constructor(private historyService: HistoryService, private insulinDurationService: InsulinDurationService, private userService: UserService) { }

  ngOnInit(): void {
    setTimeout(() => this.historyService.GetHistory(GlobalUser.userID).subscribe((data: History) => this.history = data), 50);
    setTimeout(() => this.insulinDurationService.GetDuration(GlobalUser.userID).subscribe((data) => this.insulinDuration = data), 50);
    setTimeout(() => this.ComputeActiveInsulin(), 100);
    setInterval(() => { this.ComputeActiveInsulin(); }, 300000);
  }

  ComputeActiveInsulin(): void {
    this.historyService.GetActiveInsulin(GlobalUser.userID, this.insulinDuration.duration).subscribe((data) => this.activeInsulin = data);
  }

  FormatTime(date: Date): string {
    return formatDate(date, 'hh:mma MM-dd-yyyy', 'en-US', '-1000');
  }
}
