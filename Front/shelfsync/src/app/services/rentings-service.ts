import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable} from 'rxjs';
import {Reservation} from "../models/Reservation";
import {Renting} from "../models/ResponseModels/rentings";

@Injectable({
  providedIn: 'root'
})
export class RentingsService {
  apiUrl: string = "http://localhost:7979"
  private rentingsSubject: BehaviorSubject<Renting[]> = new BehaviorSubject<Renting[]>([]);
  public rentings$: Observable<Renting[]> = this.rentingsSubject.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  fetchRentings() {

    return this.httpClient.get<Renting[]>(this.apiUrl + "/all-leases").pipe(
      catchError(err => {
        console.error('Error fetching rentings', err);
        return [];
      })
    )
      .subscribe((rentings: Renting[]) => {
        this.rentingsSubject.next(rentings);
      });
  }

  createRenting(BookId: string, CustomerName: string, ReturnDate: string) {
    return this.httpClient.post(this.apiUrl + "/lease", {BookId, CustomerName, ReturnDate})
      .pipe(
        catchError(err => {
          console.error('Error creating renting', err);
          return [];
        })
      )
      .subscribe(response => {
          console.log(response)
        }
      )
  }

  returnBook(leaseId: string, bookId: string) {
    return this.httpClient.post(this.apiUrl + "/close-lease", {leaseId, bookId})
      .pipe(
        catchError(err => {
          console.error('Error returning book', err);
          return [];
        })
      )
      .subscribe(response => {
          console.log(response)
          this.fetchRentings()
        }
      )
  }
}
