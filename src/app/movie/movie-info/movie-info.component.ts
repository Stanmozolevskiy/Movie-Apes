import { KeyWords } from './../../models/KeyWords';
import { Crew } from './../../models/Crew';
import { Genres } from './../../models/Genres';
import { Movie } from './../../models/Movie';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() data!:Movie;
  @Input() mainCast!:Crew[];
  @Input() genres!:Genres;
  @Input() keywords!:KeyWords[];
  @Input() budget!:string;
  @Input() revenue!:string;
  @Input() releaseDate!:string;
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
