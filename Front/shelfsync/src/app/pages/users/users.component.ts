import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user-service";
import {async, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
interface Car {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    SharedModule,
    TableModule,
    AsyncPipe
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit, OnDestroy{
  users: Observable<User[]>
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private userService: UserService
  )
  {
    this.users = userService.users$;
  }

  public onMouseEnter(headerCell: HTMLTableHeaderCellElement){
    this.renderer.setStyle(headerCell, 'color', 'blue');
  }

  public onMouseLeave(headerCell: HTMLTableHeaderCellElement){
    this.renderer.setStyle(headerCell, 'color', 'black');
  }
  public onClick(id: string){
    this.router.navigate([`workbench/user/${id}`])
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.userService.fetchUsers();
  }

  protected readonly async = async;
}
