import { ActivatedRoute } from '@angular/router';
import { HttpService } from './../http.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit { 
  data:any = "";

  constructor(private servise: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // getting id for a specific movie from router params
    this.route.paramMap.subscribe((id:any)=> {
    // calling api with specific id to get the movie data
    this.servise.get('movie', id.params.id).subscribe(response => {
        this.data = response; 
        console.log(response)
        })
     });
  }
}
