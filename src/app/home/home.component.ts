import { MovieResponce } from './../models/MovieResponce';
import { ReviewsComponent } from './../reviews/reviews.component';
import { DataHelper } from './../DataHelper';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { Movie } from '../models/Movie';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerMovie!:Movie;
  headerMovies!: Movie[];
  headerMovieTitle!: string;
  mainTrailer!: number;
  entierList!: Movie[];

  constructor(private servise: HttpService) { }

  ngOnInit(): void {
    this.servise.getPopular("movie").subscribe( (res:MovieResponce)=> {
      this.headerMovies = DataHelper.MostPopularNowPlaying(res.results).slice(0,4); 
      let headerMovie = DataHelper.MostPopularNowPlaying(res.results)[4];
      this.headerMovie = headerMovie;
      this.mainTrailer = res.results[0].id;
      this.entierList = res.results;

      this.servise.get("movie", headerMovie.id).subscribe((res:Movie)=> {
      this.headerMovieTitle = res.title + ": " + res.tagline;
       });
     });
  }

}
