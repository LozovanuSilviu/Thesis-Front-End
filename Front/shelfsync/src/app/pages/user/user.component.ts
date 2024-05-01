import {Component, OnInit} from '@angular/core';
import {TableModule, TablePageEvent} from "primeng/table";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {User} from "../../models/User";
import {Reservation} from "../../models/Reservation";
import {Rent} from "../../models/Rent";

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
    userId: '4',
    email: 'example@example.com',
    customerName: 'John Doe',
    numberOfReservations: 3,
    numberOfRentings: 2,
  }

  rentings:Rent[] = [
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
    { leaseId: "2", bookName: "5", leaseStartDate: "ieri", returnDate: "azi", customerName: "valera" },
  ];

  reservations : Reservation[] = [
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
    {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"},
  ];
  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType");
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
    // call to get reservations
    //call to get rentings
  }

}
