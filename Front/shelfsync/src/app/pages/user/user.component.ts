import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";


export interface User {
  email: string;
  fullName: string;
  numberOfReservations: number;
  numberOfRentings: number;
  active: boolean;
  rentings: Renting[];
  reservations: Reservation[];
}

export interface Renting {
  startDate : string;
  returnDate: string;
  status: number;
}
export interface Reservation {
  reservationId: string;
  library: string;
  reservedUntil : string;
  bookId: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TableModule,
    NgIf,
    ButtonModule,
    NgClass
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  userId: string | null = null
  constructor(private route: ActivatedRoute) {
  }

  userType : string| null = null;
  user: User = {
    email: 'example@example.com',
    fullName: 'John Doe',
    numberOfReservations: 3,
    numberOfRentings: 2,
    active: true,
    rentings: [
      {startDate: "ieri", returnDate: "azi", status: 3},
      {startDate: "ieri", returnDate: "azi", status: 2},
      {startDate: "ieri", returnDate: "azi", status: 1},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 3},
      {startDate: "ieri", returnDate: "azi", status: 2},
      {startDate: "ieri", returnDate: "azi", status: 1},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
      {startDate: "ieri", returnDate: "azi", status: 4},
    ],
    reservations: [
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
      {reservationId: "ieri", bookId: "ion creanga" , library: "Stefan cel mare" , reservedUntil: "azi"},
    ]
  }

  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType");
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
    // call to get reservations
    //call to get rentings


  }
}
