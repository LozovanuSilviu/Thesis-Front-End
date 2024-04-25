import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  constructor(private router: Router) {
  }
  books: Book[] = [
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
    { bookId: "1", bookName: "amintiri din copchilarie", bookAuthor: "ion Creanga",library: "biblioteca UTM", availableCount: 10, reservedCount: 5 },
  ];

  public addBook(){
    //call to api
  }

  public deleteBook(bookId: string) {
 console.log("delete")
}

  public onClick(id: string){
    this.router.navigate([`workbench/books/edit/${id}`])
  }
}
