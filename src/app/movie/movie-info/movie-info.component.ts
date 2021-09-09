import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() data:any;
  @Input() mainCast:any;
  @Input() genres:any;
  @Input() keywords:any;
  @Input() budget:any;
  @Input() revenue:any;
  @Input() releaseDate:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
