import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Reservation} from "../../../models/Reservation";
import {Location} from "@angular/common";
import {Router} from "@angular/router";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'user-reservations',
  standalone: true,
    imports: [
        SharedModule,
        TableModule,
        ButtonModule
    ],
  templateUrl: './user-reservations.component.html',
  styleUrl: './user-reservations.component.scss'
})
export class UserReservationsComponent {
  constructor(private router: Router) {
  }
  reservations: Reservation[] = [
    {
      "reservationId": "g4SD7f",
      "reservedUntil": "2024-05-07",
      "customerName": "John",
      "bookName": "To Kill a Mockingbird"
    }
  ]


  cancelReservation(reservationId: string)
  {
    this.router.navigate([`workbench/user-reservations/delete/${reservationId}`])
  }
}
