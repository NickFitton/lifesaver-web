import {Component, OnInit} from '@angular/core';
import {UserModel} from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.styl']
})
export class UsersComponent implements OnInit {

  users: UserModel[];

  constructor() {
    this.users = [
      {
        'id': '1',
        'username': 'test',
        'name': 'name test',
        'surname': 'surname test',
        'dob': '1',
        'email': 'test@test.com',
        'location': 'asd',
        'mobile_no': '123123'
      },
      {
        'id': '2',
        'username': 'test2',
        'name': 'test2',
        'surname': 'test2',
        'dob': '2345',
        'email': 'test2',
        'location': 'test2',
        'mobile_no': '123'
      }
    ];
  }

  ngOnInit() {
  }

}
