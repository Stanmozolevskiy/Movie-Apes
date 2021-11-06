import { Component, OnInit } from '@angular/core';

import { HomeDataServiceService } from './home-data-service.service';
import { VideoResponse } from './../models/Videos';
import { MovieResponce } from './../models/MovieResponce';
import { DataHelper } from './../DataHelper';
import { Movie } from '../models/Movie';
import { Videos } from '../models/Videos';



@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerMovie!:Movie;
  headerMovies!: Movie[];
  headerMovieTitle!: string;
  mainTrailer!: Videos;
  entierList!: Movie[];
  listTrailers!: Videos[];
  trailerTextCollor:string = "black"

  constructor(private homeDateService: HomeDataServiceService) { }

  ngOnInit(): void {
    this.homeDateService.getPopular("movie").subscribe( (res:MovieResponce)=> {
      this.headerMovies = DataHelper.MostPopularNowPlaying(res.results).slice(0,4); 
      let headerMovie = DataHelper.MostPopularNowPlaying(res.results)[4];
      this.headerMovie = headerMovie;
      this.entierList = res.results;
      
      this.homeDateService.getVideos("movie", res.results[0].id).subscribe((res:VideoResponse)=> {
      this.mainTrailer = res.results[0];
    })

    // build list of the trailers. Need to push all vudeos localy to ngOnInit first and 
    // theen asign it to the listTrailers
    let trailersList:Videos[] = []; 
      for (let i = 0; i < 13; i++) {
        this.homeDateService.getVideos("movie", res.results[i+1].id).subscribe((res:VideoResponse)=> {
          if (res.results[0] != undefined && res.results[0] != null){
            trailersList.push(res.results[0]);
          }
      })
    }
    this.listTrailers = trailersList;

  });
  }
}


