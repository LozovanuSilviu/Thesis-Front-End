import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'user-reservations',
  standalone: true,
    imports: [
        SharedModule,
        TableModule,
        ButtonModule
    ],
  templateUrl: './user-reservations.component.html',
  styleUrl: './user-reservations.component.scss'
})
export class UserReservationsComponent {
  cars: Car[] = [
    { vin: 'ABC1', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
    { vin: 'ABC123', year: 2020, brand: 'Toyota', color: 'Blue' },
    { vin: 'DEF456', year: 2019, brand: 'Honda', color: 'Red' },
    { vin: 'GHI789', year: 2018, brand: 'Ford', color: 'Green' },
  ];
}
