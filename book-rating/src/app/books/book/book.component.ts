import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  {

  @Input()
  book?: Book;

  @Output()
  rateUp = new EventEmitter<Book>();

  @Output()
  rateDown = new EventEmitter<Book>();

  doRateUp(): void {
    this.rateUp.emit(this.book);
    // debugger
  }

  doRateDown(): void {
    this.rateDown.emit(this.book);
    // debugger
  }
}
