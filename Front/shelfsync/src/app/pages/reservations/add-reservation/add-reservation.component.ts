import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";

@Component({
  selector: 'app-add-reservation',
  standalone: true,
  imports: [],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.scss'
})
export class AddReservationComponent implements OnInit{
  book: Book| null = {bookId: "", bookName: "", bookAuthor: "", library: "", reservedCount: 0, availableCount: 0};
  bookId: string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onSubmit() {
    //submit book
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["workbench/books"])
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
    //get book details
    this.book!.bookId = this.bookId;
    this.book!.bookName = "book name";
    this.book!.bookAuthor = "author";
    this.book!.library = "library";
  }
}
