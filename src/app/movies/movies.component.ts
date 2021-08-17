import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data:any = "";
  genres: any = {
    genre_ids : [28, 12, 14]
        };
  dataObject: any = {
    genre_ids: []
  };
   
  constructor(private servise: HttpService){}
    
  ngOnInit(): void {
    this.servise.getAll().subscribe(res => {
         console.log(res);
        this.data = res;
      });
      this.servise.getGenres().subscribe(res=> {
        // console.log(res)
        this.genres = res;
      });
  }

  // public mapGenres(dataObject: any):any{
  //  return dataObject.genre_ids.map( x:any => this.genres.filter( y=> x == y.id)).map(genre => genre[0].name)[0]
  // }

}
