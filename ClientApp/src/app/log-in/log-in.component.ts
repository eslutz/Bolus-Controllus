import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../interfaces/User';
import { GlobalUser } from '../globaluser';
import { AuthGuardService } from '../Services/auth-guard.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-log-in',
    templateUrl: './log-in.component.html',
    styleUrls: ['./log-in.component.css']
})
/** log-in component*/
export class LogInComponent {
  currentUser: User;

  /** log-in ctor */
  constructor(private userService: UserService, private globalUser: GlobalUser, private authGuardService: AuthGuardService, private router: Router) { }

  login(username: string): void {
    this.authGuardService.loggedIn = true;
    this.userService.GetUser(username).subscribe((data: User) => {
      this.currentUser = data;
      GlobalUser.userID = this.currentUser.userID;
      GlobalUser.username = this.currentUser.username;
    });
    this.router.navigate(['/home']);
  }
}
