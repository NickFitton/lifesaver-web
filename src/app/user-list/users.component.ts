import {Component, Inject, OnInit} from '@angular/core';
import {UserModel} from './user.model';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpClient} from '@angular/common/http';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {

  restaurant: UserModel[];
  users: UserModel[];
  restaurants: UserModel[];

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router, public snackBar: MatSnackBar) {
    this.users = [];
    this.restaurants = [];
  }

  ngOnInit() {
    this.getUsers().subscribe(results => {
      console.log(results);
      for (const user of results) {
        this.users.push(user);
      }
    });
    this.getRestaurants().subscribe(results => {
      console.log(results);
      for (const restaurant of results) {
        this.restaurants.push(restaurant);
      }
    });
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`http://ntinc.co.uk/hex2018/view.php?slagroom=benefactors`);
  }

  getRestaurants(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`http://ntinc.co.uk/hex2018/view.php?slagroom=restaurants`);
  }

  giveTo(userId: string) {
    const dialogRef = this.dialog.open(DonateDialogComponent, {
      width: '500px',
      data: {restaurants: this.restaurants}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      const restaurantId = result[0];
      const diningStyle = result[1];
      const amount = result[2];
      if (restaurantId !== '' && diningStyle !== '' && amount !== '') {
        this.makeDonationRequest('1', userId, restaurantId, diningStyle, amount);
      } else {
        console.log('something went wrong, param missing for request');
      }
    });
  }

  makeDonationRequest(donatorId: string, userId: string, restaurantId: string, diningStyle: string, amount: string) {
    const url = 'http://ntinc.co.uk/hex2018/gift.php';

    const data =
      'id_benefactor=' + donatorId + '&' +
      'id_beneficiary=' + userId + '&' +
      'id_restaurant=' + restaurantId + '&' +
      'amount=' + diningStyle + '&' +
      'type=' + amount;

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log('Was success');
      }
    });

    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('Donation Successful!', '', {
      duration: 2000,
    });
  }
}

@Component({
  selector: 'app-donate-dialog',
  templateUrl: 'donate.dialog.html',
})
export class DonateDialogComponent {
  diningStyles: any[];

  amount: string;
  selectedDiningStyle: string;
  selectedRestaurant: string;

  constructor(public dialogRef: MatDialogRef<DonateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.diningStyles = [{
      name: 'Together',
      value: 'together'
    }, {
      name: 'On Their Own',
      value: 'onTheirOwn'
    }, {
      name: 'Upfront',
      value: 'upfront'
    }];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
