import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {Reservation} from "../../../models/Reservation";
import {Router} from "@angular/router";
import {ReservationsService} from "../../../services/reservations.service";
import {async, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

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
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './all-reservations.component.html',
  styleUrl: './all-reservations.component.scss'
})
export class AllReservationsComponent implements OnInit, OnDestroy{
  reservations : Observable<Reservation[]>;

  constructor(
    private router:  Router,
    private reservationService: ReservationsService
  ) {
    this.reservations = reservationService.reservations$;
  }

  createRentFromReservation(reservationId: string, bookId: string)
  {
    sessionStorage.setItem("reservationBookId", bookId)
    this.router.navigate([`workbench/all-reservations/add-rent/${reservationId}`])
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.reservationService.fetchReservations()
  }

  protected readonly async = async;
}
