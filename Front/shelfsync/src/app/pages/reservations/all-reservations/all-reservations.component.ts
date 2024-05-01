import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Reservation} from "../../../models/Reservation";
import {Router} from "@angular/router";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'all-reservations',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.scss'
})
export class AllReservationsComponent {
  constructor(
    private router:  Router
  ) {
  }
  reservations: Reservation[] = [
    {
      "reservationId": "g4SD7f",
      "reservedUntil": "2024-05-07",
      "customerName": "John",
      "bookName": "To Kill a Mockingbird"
    },
    {
      "reservationId": "f8YhR3",
      "reservedUntil": "2024-05-07",
      "customerName": "Alice",
      "bookName": "1984"
    },
    {
      "reservationId": "r2TkL9",
      "reservedUntil": "2024-05-07",
      "customerName": "Bob",
      "bookName": "1984"
    },
    {
      "reservationId": "t6PqB1",
      "reservedUntil": "2024-05-07",
      "customerName": "Jane",
      "bookName": "The Catcher in the Rye"
    },
    {
      "reservationId": "y9RwX0",
      "reservedUntil": "2024-05-07",
      "customerName": "Sam",
      "bookName": "The Catcher in the Rye"
    },
    {
      "reservationId": "u3ZkQ2",
      "reservedUntil": "2024-05-07",
      "customerName": "Emily",
      "bookName": "The Catcher in the Rye"
    },
    {
      "reservationId": "v7KjI5",
      "reservedUntil": "2024-05-07",
      "customerName": "Mark",
      "bookName": "The Great Gatsby"
    },
    {
      "reservationId": "w1HzD6",
      "reservedUntil": "2024-05-07",
      "customerName": "Grace",
      "bookName": "The Grapes of Wrath"
    },
    {
      "reservationId": "x8EwF7",
      "reservedUntil": "2024-05-07",
      "customerName": "Jack",
      "bookName": "The Road"
    },
    {
      "reservationId": "z0VmG8",
      "reservedUntil": "2024-05-07",
      "customerName": "Sophia",
      "bookName": "The Road"
    },
    {
      "reservationId": "a1TnH3",
      "reservedUntil": "2024-05-07",
      "customerName": "Oliver",
      "bookName": "Gone with the Wind"
    },
    {
      "reservationId": "b3IoP4",
      "reservedUntil": "2024-05-07",
      "customerName": "Emma",
      "bookName": "The Testaments"
    },
    {
      "reservationId": "c9AsO5",
      "reservedUntil": "2024-05-07",
      "customerName": "William",
      "bookName": "All the Light We Cannot See"
    },
    {
      "reservationId": "d6ZmN6",
      "reservedUntil": "2024-05-07",
      "customerName": "Sophia",
      "bookName": "All the Light We Cannot See"
    },
    {
      "reservationId": "e0VnL9",
      "reservedUntil": "2024-05-07",
      "customerName": "Michael",
      "bookName": "Where the Crawdads Sing"
    },
    {
      "reservationId": "f2TjM0",
      "reservedUntil": "2024-05-07",
      "customerName": "Ava",
      "bookName": "Educated"
    },
    {
      "reservationId": "g8KlN1",
      "reservedUntil": "2024-05-07",
      "customerName": "Henry",
      "bookName": "Educated"
    },
    {
      "reservationId": "h4VpO2",
      "reservedUntil": "2024-05-07",
      "customerName": "Ella",
      "bookName": "Circe"
    },
    {
      "reservationId": "i3YrP5",
      "reservedUntil": "2024-05-07",
      "customerName": "James",
      "bookName": "The Night Circus"
    },
    {
      "reservationId": "j0XsQ6",
      "reservedUntil": "2024-05-07",
      "customerName": "Liam",
      "bookName": "The Silent Patient"
    },
    {
      "reservationId": "k2WtR7",
      "reservedUntil": "2024-05-07",
      "customerName": "Mia",
      "bookName": "Little Fires Everywhere"
    },
    {
      "reservationId": "l8YuS8",
      "reservedUntil": "2024-05-07",
      "customerName": "William",
      "bookName": "Little Fires Everywhere"
    },
    {
      "reservationId": "m1IxT3",
      "reservedUntil": "2024-05-07",
      "customerName": "Charlotte",
      "bookName": "Pride and Prejudice"
    },
    {
      "reservationId": "n7EzU4",
      "reservedUntil": "2024-05-07",
      "customerName": "Benjamin",
      "bookName": "Lord of the Flies"
    }
  ]


  createRentFromReservation(reservationId: string)
  {
    this.router.navigate([`workbench/all-reservations/add-rent/${reservationId}`])
  }
}
