import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Achtung: BUG sobald wir AJAX einführen
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private br: BookRatingService,
    private bs: BookStoreService) {

      this.bs.getBooks().subscribe(books => this.books = books);
  }

  doRateUp(book: Book): void {
    // console.log('+1 Buch angekommen', book);
    const ratedBook = this.br.rateUp(book);

    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ?  book.rating + 1 : 5
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    // console.log('-1 Buch angekommen', book);
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  doCreateBook(book: Book) {
    this.books = [...this.books, book];
  }
}
