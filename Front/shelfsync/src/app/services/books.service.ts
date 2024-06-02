import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import {BehaviorSubject, catchError, Observable, tap} from 'rxjs';
import {UserTypes} from "../../Enums/UserTypes";
import {Book} from "../models/book";
import {bookDetails} from "../models/ResponseModels/bookDetails";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  apiUrl: string = "http://localhost:6969"
  private booksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public books$: Observable<Book[]> = this.booksSubject.asObservable();
  private searchbooksSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  public searchbooks$: Observable<Book[]> = this.searchbooksSubject.asObservable();

  private bookSubject: BehaviorSubject<bookDetails> = new BehaviorSubject<bookDetails>({bookName : "", bookAuthor: ""});
  public book$: Observable<bookDetails> = this.bookSubject.asObservable();
  constructor(private httpClient: HttpClient) { }

  fetchBooks(){
    return this.httpClient.get<Book[]>(this.apiUrl + "/get-all-books").pipe(
      catchError(err => {
        console.error('Error fetching books', err);
        return [];
      })
    )
      .subscribe((books: Book[]) => {
        this.booksSubject.next(books);
      });
  }

  fetchLibraryBooks(libraryId : string)
  {
    return this.httpClient.get<Book[]>(this.apiUrl + `/get-all-books-by-library/?libraryId=${libraryId}`).pipe(
      catchError(err => {
        console.error('Error fetching books', err);
        return [];
      })
    )
      .subscribe((books: Book[]) => {
        this.booksSubject.next(books);
      });
  }

  addBook(bookName: string, bookAuthor: string, availableCount: number, libraryId : string){
    return this.httpClient.post(this.apiUrl+ "/add-book", {bookName, bookAuthor, availableCount, libraryId}).pipe(
      catchError(err => {
        console.error('Error adding book', err);
        return [];
      })
    )
      .subscribe(
        response => {
          console.log('Book added successfully', response);
          this.fetchBooks();  // Call fetchBooks() after successfully adding the book
        },
        error => {
          console.error('Error', error);
        }
      );
  }

  deleteBook(bookId : string){
    return  this.httpClient.delete(this.apiUrl+"/remove-book", {body:{bookId}}).pipe(
      catchError(err => {
        console.error('Error removing book', err);
        return [];
      })
    ).subscribe(
      response => {
        console.log('Book removed successfully', response);
        this.fetchBooks();  // Call fetchBooks() after successfully adding the book
      },
      error => {
        console.error('Error', error);
      }
    );
  }

  getBookDetails(id: string)
  {
    return this.httpClient.get<bookDetails>(this.apiUrl+ `/get-book-by-id/${id}`).pipe(
      catchError(err => {
        console.error('Error removing book', err);
        return [];
      })
    )
  }

  searchBook(criteria : string){
    return this.httpClient.get<Book[]>(this.apiUrl+`/search/${criteria}`)
      .pipe(
        catchError(err => {
          console.error('Error fetching books', err);
          return [];
        })
      )
      .subscribe((books: Book[]) => {
        this.searchbooksSubject.next(books);
      });
  }
}
