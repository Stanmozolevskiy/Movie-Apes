import { DataHelper } from './../../DataHelper';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../http.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit { 
  data:any = "";
  similarMovies:any = "";
  crew:any = "";
  cast:any = "";
  mainCast:any = "";
  director:any = "";
  alsoDirector:any = "";
  review:any ="";
  directorBio:any = "";
  trailers:any = "";
  keywords:any = "";
  budget:any="";
  revenue:any="";
  releaseDate:any="";
  reviews:any="";

  constructor(private servise: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // getting id for a specific movie from router params
    this.route.paramMap.subscribe((id:any)=> {
    // calling api with specific id to get the movie data
    this.servise.get('movie', id.params.id).subscribe((response: any) => {
        this.data = response; 
        console.log(response)
        this.reviews = response.reviews.results;
        this.keywords = response.keywords.keywords.slice(0,4);
        this.trailers = DataHelper.FindMainTrailers(response.videos.results)
        this.review = response.reviews.results;
        this.crew = DataHelper.MostPopularPeople(response.credits.crew);
        this.cast = DataHelper.MostPopularPeople(response.credits.cast);
        this.budget = DataHelper.FormatNumber(response.budget); 
        this.revenue = DataHelper.FormatNumber(response.revenue); 
        this.mainCast = DataHelper.MapJob(response.credits.crew);
        this.releaseDate = DataHelper.FormatDate(response.release_date);
        this.similarMovies = DataHelper.MostPopularRecomendations(response.similar.results ,id.params.id);
        
          let director:any = DataHelper.FindDirector(response.credits.crew);
          this.director = director;

    //call for "Director Bio" only going to show up if ther is a director
    this.servise.get("person", director.id ).subscribe((responce:any)=>{
      this.directorBio = responce;})

    //call for "Also directed by" only going to show up if ther is a director
    this.servise.get("person",  director.id +"/movie_credits").subscribe((responce:any)=>{
      this.alsoDirector = DataHelper.AlsoDirected(responce.crew, id.params.id);
          })
        });
    });
  }
}
