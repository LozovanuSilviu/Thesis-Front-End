import {Component, OnInit, Renderer2} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../../../models/book";
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    NgIf
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{
  isEditEnabled : boolean = false;
  bookId: string | null = null;
  constructor(
    private router: Router,
    private renderer: Renderer2,
  ) {
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
    this.router.navigate([`workbench/books/new-book`])
  }
  public addRent(book: Book){
    this.router.navigate([`workbench/books/new-book`])
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
  }
}
