import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MovieDataServiceService } from './../movie-data-service.service';
import { AlsoDirected } from './../../models/AlsoDirected';
import { Cast } from './../../models/Cast';
import { KeyWords } from './../../models/KeyWords';
import { Movie } from './../../models/Movie';
import { DataHelper } from './../../DataHelper';
import { Reviews } from 'src/app/models/Reviews';
import { Videos } from 'src/app/models/Videos';
import { Crew } from 'src/app/models/Crew';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit { 
  data!:Movie;
  similarMovies!:Movie[];
  crew!:Crew[];
  cast!:Cast[];
  mainCast!:Crew[];
  director!:Crew;
  alsoDirector!:Movie[];
  directorBio!:Person;
  trailers!:Videos[];
  keywords!:KeyWords[];
  budget!:string;
  revenue!:string;
  releaseDate!:string;
  reviews!:Reviews[];

  constructor(private movieDataservice: MovieDataServiceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // getting id for a specific movie from router params
    this.route.paramMap.subscribe((id:any)=> {
    // calling api with specific id to get the movie data
    this.movieDataservice.get('movie', id.params.id).subscribe((response: Movie) => {
        this.data = response; 
        this.reviews = response.reviews.results;
        this.keywords = response.keywords.keywords.slice(0,4);
        this.trailers = DataHelper.FindMainTrailers(response.videos.results)
        this.crew = DataHelper.MostPopularPeople(response.credits.crew);
        this.cast = DataHelper.MostPopularPeople(response.credits.cast);
        this.budget = DataHelper.FormatNumber(response.budget.toString()); 
        this.revenue = DataHelper.FormatNumber(response.revenue.toString()); 
        this.mainCast = DataHelper.MapJob(response.credits.crew);
        this.releaseDate = DataHelper.FormatDate(response.release_date);
        this.similarMovies = DataHelper.MostPopularRecomendations(response.similar.results ,id.params.id);
        
        let director:Crew = DataHelper.FindDirector(response.credits.crew);
        this.director = director;
        
        //call for "Director Bio" only going to show up if ther is a director
        this.movieDataservice.getPerson(director.id).subscribe((responce:Person)=>{
        this.directorBio = responce;})

    //call for "Also directed by" only going to show up if ther is a director
    this.movieDataservice.getAlsoDirected(director.id, "/movie_credits").subscribe((responce:AlsoDirected)=>{
       this.alsoDirector = DataHelper.AlsoDirected(responce.crew, id.params.id);
          })
       });
    });
  }
}
