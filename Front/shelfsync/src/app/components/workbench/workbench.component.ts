import {Component, OnInit} from '@angular/core';
import {SearchComponentComponent} from "../../pages/search-component/search-component.component";
import {Router, RouterOutlet} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'workbench',
  standalone: true,
  imports: [
    SearchComponentComponent,
    RouterOutlet,
    ButtonModule,
    NgIf
  ],
  templateUrl: './workbench.component.html',
  styleUrl: './workbench.component.scss'
})
export class WorkbenchComponent implements OnInit{
  userType: string|null = null;
  constructor( private router: Router ) {
  }
  customHandleClick(page : string){
    switch (page){
      case 'books' : {
        console.log("here")
        this.router.navigate(["workbench/books"]);
        break;
      }
      case 'all-reservations' : {
        this.router.navigate(["workbench/all-reservations"]);
        break;
      }
      case 'all-rentings' : {
        this.router.navigate(["workbench/all-rentings"]);
        break;
      }
      case 'user-reservations' : {
        this.router.navigate(["workbench/user-reservations"]);
        break;
      }
      case 'user-rentings' : {
        this.router.navigate(["workbench/user-rentings"]);
        break;
      }
      case 'users' : {
        this.router.navigate(["workbench/users"]);
        break;
      }
      case 'user' : {
        this.router.navigate(["workbench/user"]);
        break;
      }
    }
  }

  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType")
  }
}
