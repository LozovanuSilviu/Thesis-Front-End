import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";
import {UserService} from "../../../services/user-service";

@Component({
  selector: 'app-add-reservation',
  standalone: true,
  imports: [],
  templateUrl: './add-reservation.component.html',
  styleUrl: './add-reservation.component.scss'
})
export class AddReservationComponent implements OnInit, OnDestroy{
  bookId: string = "";
  bookName: string | null = null;
  bookAuthor: string | null = null;
  libraryName: string | null = null;
  username: string | null = null;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  onSubmit() {
    this.userService.reserveBook(this.bookId, this.username!)
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["workbench/books"])
  }

  ngOnInit(): void {
    var bookName = sessionStorage.getItem("rbookName")
    var bookAuthor = sessionStorage.getItem("rbookAuthor")
    var bookLibrary = sessionStorage.getItem("rbookLibrary")
    var userName = sessionStorage.getItem("username")

    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
    //get book details
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
    this.libraryName = bookLibrary;
    this.username = userName;

  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("rbookName")
    sessionStorage.removeItem("rbookAuthor")
    sessionStorage.removeItem("rbookLibrary")
  }
}
