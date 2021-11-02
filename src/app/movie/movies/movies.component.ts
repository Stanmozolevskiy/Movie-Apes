import { MovieResponce } from '../../models/MovieResponce';
import { GenreResponce } from '../../models/GenreResponce';
import { HttpService } from '../../http.service';
import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/Movie';
import { Genres } from '../../models/Genres';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data!: Movie[];
  genres!: Genres[];
  totalPages!:number;
  popular!:Movie[];
  page!: number;

  constructor(private servise: HttpService){}
    
  ngOnInit(): void {
    this.handlePageChange(1);
    this.servise.getGenres().subscribe((res:GenreResponce)=> {
      this.genres = res.genres;
    });
    this.servise.getPopular("movie").subscribe((res: MovieResponce)=> {
     this.popular = res.results.slice(0,5);
    });
  }

  handlePageChange(event:number = 1 ){
    this.servise.getAll(event).subscribe((res: MovieResponce) => {
      this.data = res.results
      this.page = res.page;
      this.totalPages = res.total_pages;
    });
  }

  // mappes list of gsenres from one API call to a call that provides the movies
  // and returns an array with genres 
  mapGenres(movieObject:Movie, genresArray:Genres[]){
    if(movieObject && genresArray){
      return movieObject.genre_ids.map((genreFromMovie:number)=> 
              genresArray.filter((allGenres:Genres) => genreFromMovie == allGenres.id))
                        .map((gerne: Genres[]) => gerne[0].name).slice(0,2); 
    }
    return null;
  }
}
