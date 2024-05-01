import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  selector: 'edit-book-component',
  templateUrl: './edit-book-component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./edit-book-component.scss']
})
export class EditBookComponent  implements OnInit{

  editBook: Book| null = null;
  bookId: string|null = null;

  constructor(
    private route : ActivatedRoute,
    private router : Router
  )
  {
  }

  onSubmit() {
    // send data to api
    this.closeEdit()
  }

  closeEdit() {
    this.router.navigate(["workbench/books"]);
  }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
      //request to get book details
    this.editBook =
      { bookId: "5d1d846e", bookName: "To Kill a Mockingbird", bookAuthor: "Harper Lee",library: "National Library of Moldova", availableCount: 3, reservedCount: 1 }
  }
}
