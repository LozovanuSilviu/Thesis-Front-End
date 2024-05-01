import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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
  )
  {
  }
  confirm() {
    //call to delete book
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
