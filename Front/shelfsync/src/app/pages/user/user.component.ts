import {Component, OnInit} from '@angular/core';
import {TableModule, TablePageEvent} from "primeng/table";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
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
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  userType : string| null = null;
  user: User = {
    userId: '1aB2cD',
    email: 'john@gmail.com',
    customerName: 'John Snow',
    numberOfReservations: 1,
    numberOfRentings: 1,
  }

  rents:Rent[] = [
    {
      "leaseId": "3dH5g9",
      "bookName": "To Kill a Mockingbird",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "John"
    },
  ];

  reservations : Reservation[] = [
    {
      "reservationId": "g4SD7f",
      "reservedUntil": "2024-05-07",
      "customerName": "John",
      "bookName": "To Kill a Mockingbird"
    }
  ];
  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType");
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
    // call to get reservations
    //call to get rentings
  }

  returnBook(leaseId: string){
    this.router.navigate([`workbench/all-rentings/return-rent/${leaseId}`])
  }

  createRentFromReservation(reservationId: string)
  {
    this.router.navigate([`workbench/all-reservations/add-rent/${reservationId}`])
  }

}
