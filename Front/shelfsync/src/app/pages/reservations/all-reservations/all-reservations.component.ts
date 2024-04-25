import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Reservation} from "../../../models/Reservation";

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
  reservations: Reservation[] = [
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
}
