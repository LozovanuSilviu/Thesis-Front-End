import { Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";
import {AsyncPipe, NgIf} from "@angular/common";
import {async, Observable} from "rxjs";
import {BooksService} from "../../../services/books.service";
@Component({
  selector: 'app-search-books',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit, OnDestroy{
  userType: string| null = null;
  books$: Observable<Book[]>;
  criteria: any;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private bookService : BooksService,
    private route: ActivatedRoute

  ) {
    this.books$ = bookService.searchbooks$;
  }

  public addReservation(bookId: string, bookName : string, bookAuthor: string, bookLibrary: string){
    console.log("-----")
    sessionStorage.setItem("rbookName", bookName)
    sessionStorage.setItem("rbookAuthor", bookAuthor)
    sessionStorage.setItem("rbookLibrary", bookLibrary)
    this.router.navigate([`workbench/books/add-reservation/${bookId}`])
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.criteria = params['criteria'];
    });
    this.bookService.searchBook(this.criteria);
  }

  ngOnDestroy(): void {
  }

  protected readonly async = async;
}
