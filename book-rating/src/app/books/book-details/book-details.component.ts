import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, map, mergeMap, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
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
    switchMap(isbn => this.bs.getSingleBook(isbn!)),
    tap(() => this.loading = false),
  )

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }

}
