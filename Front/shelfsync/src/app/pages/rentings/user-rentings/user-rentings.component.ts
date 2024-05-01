import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Rent} from "../../../models/Rent";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'app-user-rentings',
  standalone: true,
    imports: [
        SharedModule,
        TableModule
    ],
  templateUrl: './user-rentings.component.html',
  styleUrl: './user-rentings.component.scss'
})
export class UserRentingsComponent {
  cars: Rent[] = [
    {
      "leaseId": "3dH5g9",
      "bookName": "To Kill a Mockingbird",
      "leaseStartDate": "2024-04-24",
      "returnDate": "2024-05-01",
      "customerName": "John"
    },
  ];
}
