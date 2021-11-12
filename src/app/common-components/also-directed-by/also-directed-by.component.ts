import {  Component, OnInit, Input, } from '@angular/core';
import { Crew } from '../../models/Crew';
import { Person } from '../../models/Person';
import { Movie } from '../../models/Movie';
import { Router } from '@angular/router';

@Component({
  selector: 'also-directed-by',
  templateUrl: './also-directed-by.component.html',
  styleUrls: ['./also-directed-by.component.css']
})
export class AlsoDirectedByComponent implements OnInit {
  @Input() data!:Movie[];
  @Input() director!:Crew;
  @Input() directorBio!:Person;
  url!:string;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url =  this.router.routerState.snapshot.url.split("/")[1];
  }

}
