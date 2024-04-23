import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {NgIf} from "@angular/common";


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
  bookName: string;
  Library: string;
  startDate : string;
  endDate: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TableModule,
    NgIf
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
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
    ],
    reservations: [
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
      {startDate: "ieri", bookName: "ion creanga" , Library: "Stefan cel mare" , endDate: "azi"},
    ]
  }

  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType")
  }
}
