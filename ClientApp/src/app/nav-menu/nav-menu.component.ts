import { Component } from '@angular/core';
import { GlobalUser } from '../globaluser';
import { AuthGuardService } from '../Services/auth-guard.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  user: string;

  constructor(private authGuardService: AuthGuardService) { }

  ngOnInit(): void {
    setTimeout(() => this.user = GlobalUser.username, 50);
  }

  collapse(): void {
    this.isExpanded = false;
  }

  toggle(): void {
    this.isExpanded = !this.isExpanded;
  }

  logout(): void {
    GlobalUser.userID = undefined;
    GlobalUser.username = undefined;
    this.authGuardService.loggedIn = false;
  }
}
