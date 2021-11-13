import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataHelper } from 'src/app/DataHelper';
import { AlsoDirected } from 'src/app/models/AlsoDirected';
import { Cast } from 'src/app/models/Cast';
import { Crew } from 'src/app/models/Crew';
import { KeyWords } from 'src/app/models/KeyWords';
import { Movie } from 'src/app/models/Movie';
import { Person } from 'src/app/models/Person';
import { Reviews } from 'src/app/models/Reviews';
import { Videos } from 'src/app/models/Videos';
import { TvShowsDataServiceService } from '../tv-shows-data-service.service';

@Component({
  selector: 'app-single-tv-show',
  templateUrl: './single-tv-show.component.html',
  styleUrls: ['./single-tv-show.component.css']
})
export class SingleTvShowComponent implements OnInit {
  
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
  backdrop_path!:string;
  releaseDate!:string;
  
  reviews!:Reviews[];
  constructor(private tvDataservice: TvShowsDataServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
       // getting id for a specific movie from router params
       this.route.paramMap.subscribe((id:any)=> {
        // calling api with specific id to get the movie data
        this.tvDataservice.get('tv', id.params.id).subscribe((response: Movie) => {
            this.data = response; 
            this.backdrop_path = response.backdrop_path;
            this.reviews = response.reviews.results?.slice(0,2);
            this.keywords = response.keywords.results.slice(0,4);
            this.trailers = DataHelper.FindMainTrailers(response.videos.results)
            this.crew = DataHelper.MostPopularPeople(response.credits.crew);
            this.cast = DataHelper.MostPopularPeople(response.credits.cast);
            this.budget = DataHelper.FormatNumber(response.budget); 
            this.revenue = DataHelper.FormatNumber(response.revenue); 
            this.mainCast = DataHelper.MapJob(response.credits.crew);
            this.releaseDate = DataHelper.FormatDate(response.first_air_date);
            this.similarMovies = DataHelper.MostPopularRecomendations(response.similar.results ,id.params.id);
            let director:Crew = DataHelper.FindDirector(response.credits.crew);
            this.director = director;
            
            //call for "Director Bio" only going to show up if ther is a director
            this.tvDataservice.getPerson(director.id).subscribe((responce:Person)=>{
            this.directorBio = responce;})
    
        //call for "Also directed by" only going to show up if ther is a director
        this.tvDataservice.getAlsoDirected(director.id, "/movie_credits").subscribe((responce:AlsoDirected)=>{
           this.alsoDirector = DataHelper.AlsoDirected(responce.crew, id.params.id);
              })
           });
        });
       
  }
}
