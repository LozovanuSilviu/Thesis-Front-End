import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {BooksService} from "../../../services/books.service";
import {NewBook} from "../../../models/requestModels/newBook";

@Component({
  selector: 'app-new-book',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.scss'
})
export class NewBookComponent {
  newBook: NewBook = {
    bookName: '',
    bookAuthor: '',
    library: sessionStorage.getItem("libraryId"),
    availableCount: 0
  };

  constructor(
    private router : Router,
    private bookService : BooksService
  )
  { }

  closeAdd() {
    this.resetForm();
    this.router.navigate(["workbench/books"])
  }

  onSubmit() {
    // Add logic to submit the form (e.g., send data to backend)
    console.log("Submitted:", this.newBook);
    this.bookService.addBook(this.newBook.bookName,this.newBook.bookAuthor,this.newBook.availableCount, this.newBook.library! )
    this.resetForm();
    this.router.navigate(["workbench/books"])
  }

  resetForm() {
    // Reset the form fields
    this.newBook = {
      bookName: '',
      bookAuthor: '',
      library: '',
      availableCount: 0
    };
  }
}
