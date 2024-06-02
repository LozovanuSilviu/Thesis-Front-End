import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableModule, TablePageEvent} from "primeng/table";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {User} from "../../models/User";
import {Reservation} from "../../models/Reservation";
import {Rent} from "../../models/Rent";
import {UserService} from "../../services/user-service";
import {async, map, Observable} from "rxjs";
import {Renting} from "../../models/ResponseModels/rentings";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    TableModule,
    NgIf,
    ButtonModule,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit, OnDestroy{
  userId: string | null = null
  numberReservation: number = 0;
  numberRentings: number = 0;
  reservations : Observable<Reservation[]> | null = null;
  rentings : Observable<Renting[]> | null = null;

  user: User = {
    userId: '',
    email: '',
    userName: '',
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  userType : string| null = null;



  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType");
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
    });
    this.userService.fetchUserData(this.userId!).subscribe(data => {
      this.user = data;
      this.userService.fetchReservations(data.userName)
      this.userService.fetchRentings(data.userName)
    })
    this.reservations = this.userService.reservations$;
    this.rentings = this.userService.rentings$;
    this.userService.reservations$
      .pipe(
        map(reservations => reservations.length)
      )
      .subscribe(count => {
        this.numberReservation = count;
      });
    this.userService.rentings$
      .pipe(
        map(rentings => rentings.length)
      )
      .subscribe(count => {
        this.numberRentings = count;
      });
    console.log(this.user.email)
    // call to get reservations
    //call to get rentings
  }

  returnBook(leaseId: string){
    this.router.navigate([`workbench/all-rentings/return-rent/${leaseId}`])
  }

  createRentFromReservation(reservationId: string)
  {
    this.router.navigate([`workbench/all-reservations/add-rent/${reservationId}`])
  }

  ngOnDestroy(): void {
  }

  protected readonly async = async;
}
