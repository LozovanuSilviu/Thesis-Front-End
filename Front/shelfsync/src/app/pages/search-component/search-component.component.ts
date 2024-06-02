import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.scss'
})
export class SearchComponentComponent {
  searchQuery: string = '';
  searchResults: string[] = [];

  constructor(
    private router: Router
  ) {
  }
  search() {
    // Implement your search logic here, for now, let's just log the search query
    console.log('Search Query:', this.searchQuery);
    // You can replace the log with actual search logic to fetch results and assign them to `this.searchResults`
    // For example:
    // this.searchResults = this.searchService.search(this.searchQuery);
  }

    protected readonly encodeURI = encodeURI;

  Search() {
    sessionStorage.setItem("criteria", this.searchQuery)
    this.router.navigate(["workbench/s"])
    this.searchQuery = ""
  }
}
