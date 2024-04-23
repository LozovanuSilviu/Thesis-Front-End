import {Component, OnInit, Renderer2} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Router} from "@angular/router";
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
export class UsersComponent {
  constructor(
    private renderer: Renderer2,
    private router: Router,
  )
  {}
  cars: Car[] = [
    { vin: 'ABC12222', year: 2020, brand: 'Toyota', color: 'Blue' },
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
  public onMouseEnter(headerCell: HTMLTableHeaderCellElement){
    this.renderer.setStyle(headerCell, 'color', 'blue');
  }

  public onMouseLeave(headerCell: HTMLTableHeaderCellElement){
    this.renderer.setStyle(headerCell, 'color', 'black');
  }
  public onClick(id: string){
    this.router.navigate([`workbench/user/${id}`])
  }

}
