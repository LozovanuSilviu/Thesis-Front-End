import {Component, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'app-users',
  standalone: true,
    imports: [
        SharedModule,
        TableModule
    ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
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

  ngOnInit(): void {
  }
}
