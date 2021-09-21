import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError, map, retry, switchMap, tap } from 'rxjs/operators';

import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  loading = false;

  book$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('isbn')),
    tap(() => this.loading = true),
    switchMap(isbn => this.bs.getSingleBook(isbn!).pipe(
      retry(3),
      catchError((e: HttpErrorResponse) => of({
        title: 'ERRRO',
        rating: '0',
        description: e.message
      }))
    )),
    tap(() => this.loading = false)
  )

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }

}
