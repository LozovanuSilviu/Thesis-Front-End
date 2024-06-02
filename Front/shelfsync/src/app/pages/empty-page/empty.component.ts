import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'empty',
  standalone: true,
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.scss'
})
export class EmptyComponent implements OnInit, OnDestroy{
  criteria : string| null = null;
  constructor(
    private router : Router,
    private route : ActivatedRoute,
  )
  {
  }
  ngOnInit(): void {
    console.log("here")
    this.criteria = sessionStorage.getItem("criteria")
    this.router.navigate([`workbench/search/${this.criteria}`])
  }

  ngOnDestroy(): void {
    sessionStorage.removeItem("criteria")
  }
}
