import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.styl']
})
export class UserSignupComponent implements OnInit {
  userType: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  dob: string;
  email: string;
  website: string;
  story: string;
  location: string;
  mobile_no: string;
  phone_no: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  makeCreationRequest(userType: string, url: string, data: string) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        console.log('Was success');
      }
    });

    xhr.open('POST', url);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    xhr.send(data);
    this.router.navigate(['/success'], { queryParams: { type: userType } });
  }

  setupAndGetPost() {
    const data =
      'username=' + this.username + '&'
      + 'password=' + this.password + '&'
      + 'name=' + this.name + '&'
      + 'surname=' + this.surname + '&'
      + 'dob=' + this.dob + '&'
      + 'email=' + this.email + '&'
      + 'website=' + this.website + '&'
      + 'story=' + this.story + '&'
      + 'location=' + this.location + '&'
      + 'mobile_no=' + this.mobile_no + '&'
      + 'phone_no=' + this.phone_no;
    console.log(data);
    this.makeCreationRequest(this.userType, 'http://ntinc.co.uk/hex2018/register.php?slagroom=restaurant', data);
  }
}
