import {Component, OnInit, Renderer2} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Router} from "@angular/router";
import {User} from "../../models/User";
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
  users: User[] = [
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
    {userId:'4', email: 'example@example.com', customerName: 'John Doe', numberOfReservations: 3, numberOfRentings: 2},
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
