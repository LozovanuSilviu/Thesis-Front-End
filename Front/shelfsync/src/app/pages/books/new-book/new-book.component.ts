import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";

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
  newBook: any = {
    bookName: '',
    bookAuthor: '',
    library: '',
    availableCount: 0
  };

  constructor(
    private router : Router
  )
  { }

  closeAdd() {
    this.resetForm();
    this.router.navigate(["workbench/books"])
  }

  onSubmit() {
    // Add logic to submit the form (e.g., send data to backend)
    console.log("Submitted:", this.newBook);
    //call to api to add new book
    this.resetForm();
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
