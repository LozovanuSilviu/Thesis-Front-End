import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Reservation} from "../../../models/Reservation";
import {AsyncPipe, Location} from "@angular/common";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user-service";
import {async, Observable} from "rxjs";
import {RentingsService} from "../../../services/rentings-service";
import {ReservationsService} from "../../../services/reservations.service";
import {User} from "../../../models/User";

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
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './user-reservations.component.html',
  styleUrl: './user-reservations.component.scss'
})
export class UserReservationsComponent implements OnInit, OnDestroy{
  constructor(
    private router: Router,
    private userService : UserService
  ) {
    this.reservations = userService.reservations$;
  }
  reservations: Observable<Reservation[]>;


  cancelReservation(reservationId: string)
  {
    this.router.navigate([`workbench/user-reservations/delete/${reservationId}`])
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    var name = sessionStorage.getItem("username")
    this.userService.fetchReservations(name!)
  }

  protected readonly async = async;
}
