import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  create = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor() {
    this.bookForm.valueChanges.subscribe(
      e => console.log(e)
    );
  }

  hasError(path: string) {
    const control = this.bookForm.get(path);
    return control?.touched && control?.invalid;
  }

  submitForm() {

    const newBook = {
      ...this.bookForm.value,
      rating: 1
    } as Book;

    this.create.emit(newBook);

    this.bookForm.reset();
  }
}
