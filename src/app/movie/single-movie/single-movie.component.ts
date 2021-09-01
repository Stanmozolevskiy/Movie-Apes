import { ResultTemplateContext } from './../../../../dist/assets/vendor/@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window.d';
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
        this.budget = DataHelper.FormatNumber(response.budget); 
        this.revenue = DataHelper.FormatNumber(response.revenue); 
        this.releaseDate = DataHelper.FormatDate(response.release_date); 
        });
    //call for the "You migh also like"
    this.servise.get("movie", id.params.id+"/similar").subscribe((res: any)=>{
       this.similarMovies = DataHelper.MostPopularRecomendations(res.results ,id.params.id);
      })
      //call for the "Crew and Cast"
      this.servise.get("movie", id.params.id+"/credits").subscribe((res: any)=>{
        this.mainCast = DataHelper.MapJob(res.crew);
        this.crew = DataHelper.MostPopularPeople(res.crew)
        this.cast = DataHelper.MostPopularPeople(res.cast);
        
        let director:any = DataHelper.FindDirector(res.crew);
        this.director = director;

    //call for "Director Bio" only going to show up if ther is a director
    this.servise.get("person", director.id ).subscribe((responce:any)=>{
      this.directorBio = responce;
      console.log(responce)

        })
    //call for "Also directed by" only going to show up if ther is a director
    this.servise.get("person",  director.id +"/movie_credits").subscribe((responce:any)=>{
      this.alsoDirector = DataHelper.AlsoDirected(responce.crew, id.params.id);
          })
        })
    //call for "Reviews" only going to show up if ther is a director
    this.servise.get("movie",  id.params.id +"/reviews").subscribe((responce:any)=>{
      this.review = responce.results;
        })

    //call for "Trailers" only going to show up if ther is a director
    this.servise.get("movie",  id.params.id +"/videos").subscribe((responce:any)=>{
      this.trailers = responce.results;
        })
    //call for "Keywords"
    this.servise.get("movie",  id.params.id +"/keywords").subscribe((responce:any)=>{
      this.keywords = responce.keywords.slice(0,4);
        })
    //call for "Reviews"
    this.servise.get("movie",  id.params.id +"/reviews").subscribe((responce:any)=>{
      this.reviews = responce.results;
        })
    });
  }

  mapJob(data:any, job:string) {
    return data.filter((x:any)=>x.job == job);
  };

}
