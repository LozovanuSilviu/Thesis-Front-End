import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Rent} from "../../../models/Rent";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";
import {RentingsService} from "../../../services/rentings-service";
import {Renting} from "../../../models/ResponseModels/rentings";
import {async, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-all-rentings',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    ButtonModule,
    AsyncPipe
  ],
  templateUrl: './all-rentings.component.html',
  styleUrl: './all-rentings.component.scss'
})
export class AllRentingsComponent implements OnInit, OnDestroy{
  rents : Observable<Renting[]>;
  constructor(
    private router: Router,
    private rentingsService : RentingsService
  ) {
    this.rents = rentingsService.rentings$
  }

    returnBook(leaseId: string, bookId: string, bookName : string, customerName : string){
    sessionStorage.setItem("returnBookId",bookId )
    sessionStorage.setItem("bookName",bookName )
    sessionStorage.setItem("customerName",customerName )
    this.router.navigate([`workbench/all-rentings/return-rent/${leaseId}`])
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.rentingsService.fetchRentings()
  }

  protected readonly async = async;
}
