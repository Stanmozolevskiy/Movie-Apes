import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data:any = "";
  genres: any = "";
   
  constructor(private servise: HttpService){}
    
  ngOnInit(): void {
    this.servise.getAll().subscribe((res: any) => {
       // console.log(res.results[0]);
        this.data = res.results;
      });
      this.servise.getGenres().subscribe( (res:any)=> {
        this.genres = res.genres;
      });
  }

  // mappes list of gsenres from one API call to a call that provides the movies
  // and returns an array with genres 
  mapGenres(movieObject: any, genresArray: any):[]{
      return movieObject.map((genreFromMovie:any)=> 
              genresArray.filter((allGenres:any) => genreFromMovie == allGenres.id))
                        .map((gerne: any) => gerne[0].name).slice(0,2); 
  }
}
