import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location, NgClass} from "@angular/common";
import {RentingsService} from "../../../services/rentings-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './return-book.component.html',
  styleUrl: './return-book.component.scss'
})
export class ReturnBookComponent implements OnInit, OnDestroy{
  private customerId: string | null = null;
  constructor(
    private location: Location,
    private rentingService : RentingsService,
    private route : ActivatedRoute,
    private router : Router
  ) {
  }
  bookId : string | null = null
  bookName: string | null = null;
  customerName: string | null = null;
  leaseId: string | null = null;
  stars: number[] = [1, 2, 3, 4, 5];
  currentRating: number = 0;

  onReturn() {
    this.rentingService.returnBook(this.leaseId!, this.bookId!)
    this.router.navigate(["workbench/success-return"])
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

  ngOnDestroy(): void {
    sessionStorage.removeItem("returnBookId")
    sessionStorage.removeItem("bookName")
    sessionStorage.removeItem("customerName")
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.leaseId = params['leaseId'];
    });
    this.bookId = sessionStorage.getItem("returnBookId");
    this.bookName = sessionStorage.getItem("bookName")
    this.customerName = sessionStorage.getItem("customerName")
  }
}
