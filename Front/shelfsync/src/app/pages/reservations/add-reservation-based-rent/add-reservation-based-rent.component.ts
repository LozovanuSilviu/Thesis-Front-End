import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../../services/reservations.service";

@Component({
  selector: 'app-add-rent',
  standalone: true,
  imports: [
    NgStyle,
    FormsModule
  ],
  templateUrl: './add-reservation-based-rent.component.html',
  styleUrl: './add-reservation-based-rent.component.scss'
})
export class AddReservationBasedRentComponent implements OnInit, OnDestroy{
  returnDate: string = '';
  rentId: string| null = null;
  minDate: string | null = null;
  maxDate: string | null = null;
  bookId: string | null = null;

constructor(
  private route: ActivatedRoute,
  private location: Location,
  private router: Router,
  private renservationRenting: ReservationsService
) {
}

  onSubmit() {
  console.log(this.rentId)
    this.renservationRenting.rentFromReservation(this.returnDate,this.rentId!, this.bookId!)
    this.router.navigate(["workbench/success-rent-from-reservation"]);

  }

  closeReturnDate() {
  this.router.navigate(["workbench/all-reservations"]);
  }

  ngOnInit(): void {
     this.bookId = sessionStorage.getItem("reservationBookId");
    this.route.params.subscribe(params => {
      this.rentId = params['reservationId'];
    })
    this.minDate = new Date(new Date().setDate(new Date().getDate()  +1)).toISOString().substring(0, 10);
    this.maxDate = new Date(new Date().setDate(new Date().getDate()  +7)).toISOString().substring(0, 10);
  }

  ngOnDestroy(): void {
  sessionStorage.removeItem("reservationBookId");
  }

}
