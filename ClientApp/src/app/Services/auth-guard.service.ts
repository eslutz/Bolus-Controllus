import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class AuthGuardService {
  loggedIn: boolean;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loggedIn) {
      return true;
    }
    else {
      alert('Please log in.');
      this.router.navigate(['/']);
      return false;
    }
  }
}
