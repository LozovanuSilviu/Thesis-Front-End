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
    {
      "userId": "1aB2cD",
      "email": "john@gmail.com",
      "customerName": "John",
      "numberOfReservations": 1,
      "numberOfRentings": 1
    },
    {
      "userId": "3eF4gH",
      "email": "alice@gmail.com",
      "customerName": "Alice",
      "numberOfReservations": 2,
      "numberOfRentings": 3
    },
    {
      "userId": "5iJ6kL",
      "email": "bob@gmail.com",
      "customerName": "Bob",
      "numberOfReservations": 3,
      "numberOfRentings": 1
    },
    {
      "userId": "7mN8oP",
      "email": "jane@gmail.com",
      "customerName": "Jane",
      "numberOfReservations": 1,
      "numberOfRentings": 1
    },
    {
      "userId": "9qR0sT",
      "email": "sam@gmail.com",
      "customerName": "Sam",
      "numberOfReservations": 1,
      "numberOfRentings": 3
    },
    {
      "userId": "2uV3wX",
      "email": "emily@gmail.com",
      "customerName": "Emily",
      "numberOfReservations": 2,
      "numberOfRentings": 1
    },
    {
      "userId": "4yZ5aB",
      "email": "mark@gmail.com",
      "customerName": "Mark",
      "numberOfReservations": 1,
      "numberOfRentings": 1
    },
    {
      "userId": "6cD7eF",
      "email": "grace@gmail.com",
      "customerName": "Grace",
      "numberOfReservations": 1,
      "numberOfRentings": 4
    },
    {
      "userId": "8gH9iJ",
      "email": "oliver@gmail.com",
      "customerName": "Oliver",
      "numberOfReservations": 2,
      "numberOfRentings": 1
    },
    {
      "userId": "1kL2mN",
      "email": "emma@gmail.com",
      "customerName": "Emma",
      "numberOfReservations": 1,
      "numberOfRentings": 5
    },
    {
      "userId": "3oP4qR",
      "email": "sophia@gmail.com",
      "customerName": "Sophia",
      "numberOfReservations": 2,
      "numberOfRentings": 1
    },
    {
      "userId": "5sT6uV",
      "email": "michael@gmail.com",
      "customerName": "Michael",
      "numberOfReservations": 1,
      "numberOfRentings": 1
    },
    {
      "userId": "7wX8yZ",
      "email": "ava@gmail.com",
      "customerName": "Ava",
      "numberOfReservations": 1,
      "numberOfRentings": 6
    },
    {
      "userId": "9aB0cD",
      "email": "henry@gmail.com",
      "customerName": "Henry",
      "numberOfReservations": 1,
      "numberOfRentings": 1
    },
    {
      "userId": "1eF2gH",
      "email": "ella@gmail.com",
      "customerName": "Ella",
      "numberOfReservations": 2,
      "numberOfRentings": 2
    }
  ]

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
