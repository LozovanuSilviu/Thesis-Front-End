import { Component } from '@angular/core';
import {SearchComponentComponent} from "../../pages/search-component/search-component.component";
import {Router, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'workbench',
  standalone: true,
  imports: [
    SearchComponentComponent,
    RouterOutlet,
    ButtonModule
  ],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss'
})
export class WorkbenchComponent {
  constructor( private router: Router ) {
  }
  customHandleClick(page : string){
    switch (page){
      case 'books' : {
        console.log("here")
        this.router.navigate(["workbench/books"]);
        break;
      }
      case 'reservations' : {
        this.router.navigate(["workbench/reservations"]);
        break;
      }
      case 'users' : {
        this.router.navigate(["workbench/users"]);
        break;
      }
    }
  }
}
