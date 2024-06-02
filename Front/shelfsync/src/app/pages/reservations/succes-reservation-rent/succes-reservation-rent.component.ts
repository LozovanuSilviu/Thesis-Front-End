import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-succes-reservation-rent',
  standalone: true,
  imports: [],
  templateUrl: './succes-reservation-rent.component.html',
  styleUrl: './succes-reservation-rent.component.scss'
})
export class SuccesReservationRentComponent {
  constructor(
    private router: Router
  ) {
  }
  close() {
    this.router.navigate(["workbench/all-reservations"])
  }
}
