import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../../../models/Reservation";

@Component({
  selector: 'app-delete-reservation',
  standalone: true,
  imports: [],
  templateUrl: './delete-reservation.component.html',
  styleUrl: './delete-reservation.component.scss'
})
export class DeleteReservationComponent implements OnInit{
  reservationId: string = "";
  reservation: Reservation = {reservationId: "5", reservedUntil:"miine", customerName: "valera", bookName: "got"}
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reservationId = params['reservationId'];
      //call to get reservation Info
    })
  }
  onConfirmCancel(){
    //call to delete reservation
    this.navigateBack()
  }

  navigateBack(){
    this.router.navigate(["workbench/user-reservations"])
  }
  onDismiss(){
    this.navigateBack()
  }
}
