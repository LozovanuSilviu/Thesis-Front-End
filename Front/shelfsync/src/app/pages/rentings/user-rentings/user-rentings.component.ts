import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Rent} from "../../../models/Rent";
import {async, Observable} from "rxjs";
import {RentingsService} from "../../../services/rentings-service";
import {Renting} from "../../../models/ResponseModels/rentings";
import {AsyncPipe} from "@angular/common";
import {UserService} from "../../../services/user-service";
import {ButtonModule} from "primeng/button";

interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'app-user-rentings',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    AsyncPipe,
    ButtonModule
  ],
  templateUrl: './user-rentings.component.html',
  styleUrl: './user-rentings.component.scss'
})
export class UserRentingsComponent implements OnInit, OnDestroy{
  rents: Observable<Renting[]>

  constructor(
    private userService: UserService
  ) {
    this.rents = userService.rentings$;
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    var name = sessionStorage.getItem("username")
    console.log(this.userService.fetchRentings(name!));
  }

  protected readonly async = async;
}
