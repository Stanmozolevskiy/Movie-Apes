import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'top-five-list',
  templateUrl: './top-five-list.component.html',
  styleUrls: ['./top-five-list.component.css']
})
export class TopFiveListComponent implements OnInit {

  @Input() data!: Movie[];
  url!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url =  this.router.routerState.snapshot.url.split("/")[1];
  }

}
