import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Rent} from "../../../models/Rent";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-rentings',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './all-rentings.component.html',
  styleUrl: './all-rentings.component.scss'
})
export class AllRentingsComponent {
  constructor(
    private router: Router
  ) {
  }
  rents: Rent[] = [
    {
      "leaseId": "3dH5g9",
      "bookName": "To Kill a Mockingbird",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "John"
    },
    {
      "leaseId": "7fR8t2",
      "bookName": "1984",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Alice"
    },
    {
      "leaseId": "4vT9u5",
      "bookName": "The Catcher in the Rye",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Bob"
    },
    {
      "leaseId": "9eY0v1",
      "bookName": "The Great Gatsby",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Jane"
    },
    {
      "leaseId": "2aK1w4",
      "bookName": "The Grapes of Wrath",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Sam"
    },
    {
      "leaseId": "3sD2x7",
      "bookName": "The Road",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Emily"
    },
    {
      "leaseId": "6dF3y0",
      "bookName": "Gone with the Wind",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Mark"
    },
    {
      "leaseId": "1gH4z3",
      "bookName": "The Testaments",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Grace"
    },
    {
      "leaseId": "5bI5A6",
      "bookName": "All the Light We Cannot See",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Oliver"
    },
    {
      "leaseId": "8jJ6B9",
      "bookName": "Where the Crawdads Sing",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Emma"
    },
    {
      "leaseId": "2cK7C2",
      "bookName": "Educated",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Sophia"
    },
    {
      "leaseId": "9dL8D5",
      "bookName": "Circe",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Michael"
    },
    {
      "leaseId": "6fM9E8",
      "bookName": "The Night Circus",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Ava"
    },
    {
      "leaseId": "3gN0F1",
      "bookName": "The Silent Patient",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Henry"
    },
    {
      "leaseId": "1hO1G4",
      "bookName": "Little Fires Everywhere",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "Ella"
    }
  ]


  returnBook(leaseId: string){
    this.router.navigate([`workbench/all-rentings/return-rent/${leaseId}`])
  }
}
