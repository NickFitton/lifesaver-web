import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UsersComponent} from './user-list/users.component';
import {GifterHomeComponent} from './gifter-home/gifter-home.component';
import {RouterModule} from '@angular/router';
import {DonateDialogComponent} from './user-list/users.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SuccessComponent} from './success/success.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material';
import { RestaurantComponent } from './restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserSignupComponent,
    GifterHomeComponent,
    DonateDialogComponent,
    SuccessComponent,
    RestaurantComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatExpansionModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [DonateDialogComponent],
})
export class AppModule {
}
