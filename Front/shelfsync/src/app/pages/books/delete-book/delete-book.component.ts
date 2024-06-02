import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../../services/books.service";

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.scss'
})
export class DeleteBookComponent implements OnInit{
  bookId : string| null = null;
  constructor(
    private router : Router,
    private route : ActivatedRoute,
    private bookService: BooksService
  )
  {
  }
  confirm() {
    this.bookService.deleteBook(this.bookId!);
    this.router.navigate(["workbench/books"])
  }

  cancel() {
    this.router.navigate(["workbench/books"])
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
  }
}
