import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '123',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '222',
    title: 'Angular JS',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '333',
    title: 'Vue.js',
    description: 'Auch toll',
    rating: 1
  }];
}
