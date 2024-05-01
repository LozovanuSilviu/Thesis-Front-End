import {Component, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

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
export class AddReservationBasedRentComponent implements OnInit{
  returnDate: string = '';
  rentId: string| null = null;
  minDate: string | null = null;
  maxDate: string | null = null;

constructor(
  private route: ActivatedRoute,
  private router: Router
) {
}

  onSubmit() {
    // Here you can perform any action with the return date, such as submitting it to an API
    this.closeReturnDate();
  }

  closeReturnDate() {
  this.router.navigate(["workbench/all-reservations"])
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rentId = params['rentId'];
    })
    this.minDate = new Date(new Date().setDate(new Date().getDate()  +2)).toISOString().substring(0, 10);
    this.maxDate = new Date(new Date().setDate(new Date().getDate()  +8)).toISOString().substring(0, 10);
  }
}
