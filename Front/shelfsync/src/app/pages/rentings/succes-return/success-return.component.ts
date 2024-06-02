import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-return',
  standalone: true,
  imports: [],
  templateUrl: './success-return.component.html',
  styleUrl: './success-return.component.scss'
})
export class SuccessReturnComponent {
  constructor(
    private router: Router
  ) {
  }
  close() {
    this.router.navigate(["workbench/all-rentings"])
  }
}
