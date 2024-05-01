import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Rent} from "../../../models/Rent";
import {ButtonModule} from "primeng/button";

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
  rents: Rent[] = [
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
