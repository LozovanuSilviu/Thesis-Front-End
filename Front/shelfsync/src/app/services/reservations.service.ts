import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable} from 'rxjs';
import {Reservation} from "../models/Reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  apiUrl: string = "http://localhost:7979"
  private reservationsSubject: BehaviorSubject<Reservation[]> = new BehaviorSubject<Reservation[]>([]);
  public reservations$: Observable<Reservation[]> = this.reservationsSubject.asObservable();
  constructor(private httpClient: HttpClient) { }

  fetchReservations(){

    return this.httpClient.get<Reservation[]>(this.apiUrl + "/all-reservations").pipe(
      catchError(err => {
        console.error('Error fetching reservations', err);
        return [];
      })
    )
      .subscribe((reservations: Reservation[]) => {
        this.reservationsSubject.next(reservations);
      });
  }

  rentFromReservation(returnDate: string,id: string, bookId: string) {
    return this.httpClient.post(this.apiUrl+`/rent-from-reservation/?id=${id}`, {returnDate, bookId})
      .pipe(
        catchError(err => {
          console.error('Error renting from reservation', err);
          return [];
        })
      )
      .subscribe(response => {
        console.log(response)
        this.fetchReservations();
      });
  }

}
