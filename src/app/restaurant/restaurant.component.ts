import {Component, OnInit} from '@angular/core';
import {UserModel} from '../user-list/user.model';
import {Observable} from '../../../node_modules/rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.styl']
})
export class RestaurantComponent implements OnInit {
  restaurants: UserModel[];

  constructor(private http: HttpClient) {
    this.restaurants = [{
      'story': null,
      'id': '1',
      'username': 'test',
      'name': 'name test',
      'surname': 'surname test',
      'dob': '1',
      'email': 'test@test.com',
      'location': 'asd',
      'mobile_no': '123123',
      'phone_no': null
    }, {
      'story': null,
      'id': '2',
      'username': 'test2',
      'name': 'test2',
      'surname': 'test2',
      'dob': '2345',
      'email': 'test2',
      'location': 'test2',
      'mobile_no': '123',
      'phone_no': null
    }];
  }

  ngOnInit() {
    this.getRestaurants().subscribe(results => {
      console.log(results);
      this.restaurants = [];
      for (const restaurant of results) {
        this.restaurants.push(restaurant);
      }
    });
  }


  getRestaurants(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`http://ntinc.co.uk/hex2018/view.php?slagroom=restaurants`);
  }
}
