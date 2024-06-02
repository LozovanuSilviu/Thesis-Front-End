import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, Observable} from 'rxjs';
import {User} from "../models/User";
import {Reservation} from "../models/Reservation";
import {Renting} from "../models/ResponseModels/rentings";
import {Rent} from "../models/Rent";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://localhost:7777"
  rentingUrl: string ="http://localhost:7979"
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  public users$: Observable<User[]> = this.usersSubject.asObservable();
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>({email: "", userId: "", userName : ""});
  public user$: Observable<User> = this.userSubject.asObservable();
  private reservationsSubject: BehaviorSubject<Reservation[]> = new BehaviorSubject<Reservation[]>([]);
  public reservations$: Observable<Reservation[]> = this.reservationsSubject.asObservable();
  private rentingsSubject: BehaviorSubject<Renting[]> = new BehaviorSubject<Renting[]>([]);
  public rentings$: Observable<Renting[]> = this.rentingsSubject.asObservable();
  constructor(private httpClient: HttpClient) { }


  fetchUsers(){

    return this.httpClient.get<User[]>(this.apiUrl + "/api/identity/get-users").pipe(
      catchError(err => {
        console.error('Error fetching users', err);
        return [];
      })
    )
      .subscribe((users: User[]) => {
        this.usersSubject.next(users);
      });
  }

  fetchUserData(userId : string){
    return this.httpClient.get<User>(this.apiUrl+`/api/identity/get-user/?userId=${userId}`)
      .pipe(
        catchError(err => {
          console.error('Error fetching uses', err);
          return [];
        })
      )
  }

  fetchReservations(name: string){
    return this.httpClient.get<Reservation[]>(this.rentingUrl+`/user-reservations/?name=${name}`)
      .pipe(
        catchError(err => {
          console.error('Error fetching reservations', err);
          return [];
        })
      )
      .subscribe((reservations: Reservation[]) => {
        this.reservationsSubject.next(reservations);
      });
  }
  fetchRentings(name: string){
    return this.httpClient.get<Renting[]>(this.rentingUrl+`/user-leases/?name=${name}`)
      .pipe(
        catchError(err => {
          console.error('Error fetching leases', err);
          return [];
        })
      )
      .subscribe((rentings: Renting[]) => {
        this.rentingsSubject.next(rentings);
      });
  }

  reserveBook(bookId: string, customerName : string)
  {
    console.log(bookId)
    console.log(customerName)
    return this.httpClient.post(this.rentingUrl+ "/reserve", {bookId, customerName})
      .pipe(
        catchError(err => {
          console.error('Error adding reservation', err);
          return [];
        })
      ).subscribe( res => {
        console.log(res)
      })
  }

}
