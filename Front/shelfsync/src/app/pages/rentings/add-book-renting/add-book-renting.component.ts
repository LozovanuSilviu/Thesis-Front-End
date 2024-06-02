import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, Location} from "@angular/common";
import {BooksService} from "../../../services/books.service";
import {ActivatedRoute, Router} from "@angular/router";
import {bookDetails} from "../../../models/ResponseModels/bookDetails";
import {async, Observable} from "rxjs";
import {RentingsService} from "../../../services/rentings-service";

@Component({
  selector: 'app-add-book-renting',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe
  ],
  templateUrl: './add-book-renting.component.html',
  styleUrl: './add-book-renting.component.scss'
})
export class AddBookRentingComponent implements OnInit, OnDestroy{
  bookId: string = "";
   book : bookDetails = {bookName: "", bookAuthor: ""};
  //get customer name from storage
  rentDetails = {
    customerName: '',
    returnDate: new Date()
  };

  minDate: string | null = null;
  maxDate: string | null = null;

  constructor(
    private location: Location,
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private rentingService: RentingsService
  ) {
  }

  async onSubmit() {
    await this.rentingService.createRenting(this.bookId, this.rentDetails.customerName, this.rentDetails.returnDate.toString())
    this.bookService.fetchBooks()
    this.router.navigate(["workbench/success-rent"])
  }

  onCancel() {
    this.router.navigate(["workbench"])
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
    this.bookService.getBookDetails(this.bookId).subscribe( data => {
      this.book = data
    })

    this.minDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().substring(0, 10);
    this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().substring(0, 10);
    // call to get book details
  }

  ngOnDestroy(): void {
  }

}
