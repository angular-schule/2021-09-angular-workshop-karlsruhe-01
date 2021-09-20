import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  hasError(path: string) {
    const control = this.bookForm.get(path);
    return control?.touched && control?.invalid;
  }

  submitForm() {

    const newBook = {
      ...this.bookForm.value,
      rating: 1
    } as Book;

    /// Hands on!
    // 1. Definiere einen EventEmitter mit dem "create"
    // 2. "Versende" das Buch
    // 3. Empfange das Buch im Dashboard
    // 4. Füge das Buch der Liste hinzu

    this.bookForm.reset();
  }
}
