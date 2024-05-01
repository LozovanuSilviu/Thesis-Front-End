import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: 'app-add-book-renting',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-book-renting.component.html',
  styleUrl: './add-book-renting.component.scss'
})
export class AddBookRentingComponent implements OnInit{
  //get customer name from storage
  bookDetails = {
    bookName: 'book',
    bookAuthor: 'author',
    customerName: 'customer',
    returnDate: new Date()
  };

  minDate: string | null = null;
  maxDate: string | null = null;

  constructor(private location: Location) {
  }

  onSubmit() {
    // Logic to submit the renting details
    this.onCancel()
  }

  onCancel() {
    // Logic to cancel the renting operation
    this.location.back()
  }

  ngOnInit(): void {
    this.minDate = new Date(new Date().setDate(new Date().getDate()  +1)).toISOString().substring(0, 10);
    this.maxDate = new Date(new Date().setDate(new Date().getDate()  +7)).toISOString().substring(0, 10);
    // call to get book details
  }
}
