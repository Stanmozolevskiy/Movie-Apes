import { Crew } from './../../models/Crew';
import { AlsoDirected } from './../../models/AlsoDirected';
import {  Component, OnInit, Input, } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'also-directed-by',
  templateUrl: './also-directed-by.component.html',
  styleUrls: ['./also-directed-by.component.css']
})
export class AlsoDirectedByComponent implements OnInit {
  @Input() data!:Movie[];
  @Input() director!:Crew;
  @Input() directorBio!:Person;
  
  constructor() { }
  ngOnInit(): void {
  }

}
