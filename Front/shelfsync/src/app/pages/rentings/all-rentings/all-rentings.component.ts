import { Component } from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'app-all-rentings',
  standalone: true,
    imports: [
        SharedModule,
        TableModule
    ],
  templateUrl: './all-rentings.component.html',
  styleUrl: './all-rentings.component.scss'
})
export class AllRentingsComponent {
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