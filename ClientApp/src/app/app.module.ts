import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CalculationComponent } from './calculation/calculation.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HistoryComponent } from './history/history.component';
import { InsulinSettingsComponent } from './insulin-settings/insulin-settings.component';
import { LogInComponent } from './log-in/log-in.component';
import { GlobalUser } from './globaluser';
import { AuthGuardService } from './Services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CalculationComponent,
    FavoritesComponent,
    HistoryComponent,
    InsulinSettingsComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LogInComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
      { path: 'calculate', component: CalculationComponent, canActivate: [AuthGuardService] },
      { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuardService] },
      { path: 'history', component: HistoryComponent, canActivate: [AuthGuardService] },
      { path: 'settings', component: InsulinSettingsComponent, canActivate: [AuthGuardService] },
      { path: '**', redirectTo: 'home', canActivate: [AuthGuardService] }
    ])
  ],
  providers: [GlobalUser, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
