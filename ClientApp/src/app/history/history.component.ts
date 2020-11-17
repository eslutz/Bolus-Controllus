import { Component } from '@angular/core';
import { HistoryService } from '../Services/history.service';
import { History } from '../interfaces/History';
import { User } from '../interfaces/User';
import { GlobalUser } from '../globaluser';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
/** history component*/
export class HistoryComponent {
  user: User;
  history: History;
  index: number = 0;

  /** history ctor */
  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
    setTimeout(() => this.historyService.GetHistory(GlobalUser.userID).subscribe((data: History) => this.history = data), 50);
  }

  //Deletes selected history item and refreshes the list.
  deleteHistory(id: number): void {
    this.historyService.DeleteHistory(id).subscribe((data) => this.ngOnInit());
  }

  FormatTime(date: Date): string {
    return formatDate(date, 'hh:mma MM-dd-yyyy', 'en-US', '-1000');
  }
}
