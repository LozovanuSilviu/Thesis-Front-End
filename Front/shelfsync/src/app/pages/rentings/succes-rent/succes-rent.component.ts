import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-succes-rent',
  standalone: true,
  imports: [],
  templateUrl: './succes-rent.component.html',
  styleUrl: './succes-rent.component.scss'
})
export class SuccesRentComponent {
  constructor(
    private router: Router
  ) {
  }
  close() {
    this.router.navigate(["workbench"])
  }
}
