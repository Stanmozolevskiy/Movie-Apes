import {  Component, OnInit, Input, } from '@angular/core';
import { Crew } from '../../models/Crew';
import { Person } from '../../models/Person';
import { Movie } from '../../models/Movie';

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
