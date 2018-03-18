import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {GifterHomeComponent} from './gifter-home/gifter-home.component';
import {UsersComponent} from './user-list/users.component';
import {SuccessComponent} from './success/success.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: ''},
  {path: 'signup', component: UserSignupComponent},
  {path: 'users', component: UsersComponent},
  {path: 'success', component: SuccessComponent},
  {path: 'restaurants', component: RestaurantComponent},
  {path: '**', component: HomeComponent}
];
