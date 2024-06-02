import {ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { Router} from "@angular/router";
import {Book} from "../../../models/book";
import {AsyncPipe, NgIf} from "@angular/common";
import {async, Observable} from "rxjs";
import {BooksService} from "../../../services/books.service";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit, OnDestroy{
  userType: string| null = null;
  books$: Observable<Book[]>;
  libraryId: string | null = null;
  constructor(
    private router: Router,
    private renderer: Renderer2,
    private bookService : BooksService

  ) {
    this.books$ = bookService.books$;
  }
  public addBook(){
    this.router.navigate([`workbench/books/new-book`])
  }
  public addRent(book: Book){
    this.router.navigate([`workbench/books/add-rent/${book.bookId}`])
  }

  public addReservation(bookId: string, bookName : string, bookAuthor: string, bookLibrary: string){
    console.log("-----")
    sessionStorage.setItem("rbookName", bookName)
    sessionStorage.setItem("rbookAuthor", bookAuthor)
    sessionStorage.setItem("rbookLibrary", bookLibrary)
    this.router.navigate([`workbench/books/add-reservation/${bookId}`])
  }

  public deleteBook(bookId: string) {
    this.router.navigate([`workbench/books/delete/${bookId}`])
    console.log("delete")
}

  public onClick(id: string){
    this.router.navigate([`workbench/books/edit/${id}`])
  }

  public onMouseEnter(headerCell: HTMLTableHeaderCellElement){
    const button = headerCell.querySelector('.edit-book');
    console.log(button)
    if (button) {
      this.renderer.setStyle(button, 'visibility', 'visible');
    }
  }

  public onMouseLeave(headerCell: HTMLTableHeaderCellElement){
    const button = headerCell.querySelector('.edit-book');
    console.log(button)
    if (button) {
      this.renderer.setStyle(button, 'visibility', 'hidden');
    }
  }

  ngOnInit(): void {
    this.userType = sessionStorage.getItem("userType");
    this.libraryId = sessionStorage.getItem("libraryId")
    if (this.userType == "librarian"){
      this.bookService.fetchLibraryBooks(this.libraryId!)
    }
    this.bookService.fetchBooks();
  }

  ngOnDestroy(): void {
  }

  protected readonly async = async;
}
