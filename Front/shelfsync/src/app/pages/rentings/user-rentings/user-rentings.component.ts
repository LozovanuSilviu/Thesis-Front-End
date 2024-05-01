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
}
