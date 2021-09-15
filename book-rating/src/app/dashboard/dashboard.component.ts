import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  books = ['Angular', 'AngularJS', 'React'];

  constructor() {
    setTimeout(() => this.books = ['😀'], 3000);
  }
}
