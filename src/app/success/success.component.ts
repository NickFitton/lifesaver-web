import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.styl']
})
export class SuccessComponent implements OnInit {

  userType: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.userType = params['type'];
      console.log(params['type']);
    });
  }

}
