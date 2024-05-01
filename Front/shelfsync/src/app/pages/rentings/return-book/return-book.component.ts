import { Component } from '@angular/core';
import {Location, NgClass} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent {
  constructor(
    private location: Location
  ) {
  }

  bookName: string = 'book';
  customerName: string = 'customer';
  stars: number[] = [1, 2, 3, 4, 5];
  currentRating: number = 0;

  onReturn() {
    //call top return book
    this.onCancel()
  }

  onCancel() {
    this.location.back()
  }

  highlightStars(index: number) {
    this.currentRating = index + 1;
  }

  resetStars() {
    this.currentRating = 0;
  }

  setCurrentRating(rating: number) {
    this.currentRating = rating;
  }
}
