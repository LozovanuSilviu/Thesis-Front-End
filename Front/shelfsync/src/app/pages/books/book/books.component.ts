import {ChangeDetectorRef, Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { Router} from "@angular/router";
import {Book} from "../../../models/book";
import { NgIf} from "@angular/common";
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
export class BooksComponent implements OnInit, OnDestroy{
  userType: string| null = null;
  constructor(
    private router: Router,
    private renderer: Renderer2,

  ) {
  }
  books: Book[]  = [
    {
      bookId: "5d1d846e",
      bookName: "To Kill a Mockingbird",
      bookAuthor: "Harper Lee",
      library: "National Library of Moldova",
      availableCount: 3,
      reservedCount: 1
    },
    {
      bookId: "3c7a8f4b",
      bookName: "1984",
      bookAuthor: "George Orwell",
      library: "State University Library of Moldova",
      availableCount: 5,
      reservedCount: 2
    },
    {
      bookId: "9e9e636f",
      bookName: "The Catcher in the Rye",
      bookAuthor: "J.D. Salinger",
      library: "Academy of Sciences Library",
      availableCount: 7,
      reservedCount: 3
    },
    {
      bookId: "b3d0b83e",
      bookName: "The Great Gatsby",
      bookAuthor: "F. Scott Fitzgerald",
      library: "B.P. Hasdeu Municipal Library",
      availableCount: 4,
      reservedCount: 0
    },
    {
      bookId: "8655c51b",
      bookName: "The Grapes of Wrath",
      bookAuthor: "John Steinbeck",
      library: "Pushkin Library",
      availableCount: 2,
      reservedCount: 1
    },
    {
      bookId: "f4460848",
      bookName: "The Road",
      bookAuthor: "Cormac McCarthy",
      library: "A.S. Pushkin Public Library",
      availableCount: 8,
      reservedCount: 2
    },
    {
      bookId: "1bc3c4d5",
      bookName: "Gone with the Wind",
      bookAuthor: "Margaret Mitchell",
      library: "N. Karamzin Library",
      availableCount: 6,
      reservedCount: 1
    },
    {
      bookId: "15363e0c",
      bookName: "The Testaments",
      bookAuthor: "Margaret Atwood",
      library: "Stefan cel Mare Central Library",
      availableCount: 3,
      reservedCount: 0
    },
    {
      bookId: "f12235c7",
      bookName: "All the Light We Cannot See",
      bookAuthor: "Anthony Doerr",
      library: "Ion Creanga Children's Library",
      availableCount: 4,
      reservedCount: 2
    },
    {
      bookId: "2dcf8967",
      bookName: "Where the Crawdads Sing",
      bookAuthor: "Delia Owens",
      library: "Vasile Alecsandri National Theater Library",
      availableCount: 5,
      reservedCount: 1
    },
    {
      bookId: "a99f4a2a",
      bookName: "Educated",
      bookAuthor: "Tara Westover",
      library: "B.P. Hasdeu Municipal Library",
      availableCount: 6,
      reservedCount: 2
    },
    {
      bookId: "e2ef2036",
      bookName: "Circe",
      bookAuthor: "Madeline Miller",
      library: "N. Karamzin Library",
      availableCount: 3,
      reservedCount: 1
    },
    {
      bookId: "efc6f2bd",
      bookName: "The Night Circus",
      bookAuthor: "Erin Morgenstern",
      library: "Academy of Sciences Library",
      availableCount: 4,
      reservedCount: 0
    },
    {
      bookId: "b98e68ed",
      bookName: "The Silent Patient",
      bookAuthor: "Alex Michaelides",
      library: "State University Library of Moldova",
      availableCount: 2,
      reservedCount: 1
    },
    {
      bookId: "7f8f1000",
      bookName: "Little Fires Everywhere",
      bookAuthor: "Celeste Ng",
      library: "Pushkin Library",
      availableCount: 5,
      reservedCount: 2
    }
  ];


  public addBook(){
    this.router.navigate([`workbench/books/new-book`])
  }
  public addRent(book: Book){
    this.router.navigate([`workbench/books/add-rent/${book.bookId}`])
  }

  public addReservation(bookId: string){
    console.log("-----")
    this.router.navigate([`workbench/books/add-reservation/${bookId}`])
  }

  public deleteBook(bookId: string) {
    this.router.navigate([`workbench/books/delete/${bookId}`])
    console.log("delete")
}

  public onClick(id: string){
    const bookToUpdate = this.books.find(book => book.bookId === "5d1d846e");
    bookToUpdate!.availableCount = 4; // Example: Decrease available count by 1
    bookToUpdate!.reservedCount = 1; // Example: Increase reserved count by 1
    this.books[0] = bookToUpdate!;
    console.log(this.books[0]);
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
  }

  ngOnDestroy(): void {

  }
}
