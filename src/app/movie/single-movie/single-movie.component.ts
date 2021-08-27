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

  constructor(private servise: HttpService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // getting id for a specific movie from router params
    this.route.paramMap.subscribe((id:any)=> {
    // calling api with specific id to get the movie data
    this.servise.get('movie', id.params.id).subscribe(response => {
        this.data = response; 
        });
    //call for the recomended movies
    this.servise.get("movie", id.params.id+"/similar").subscribe((res: any)=>{
       this.similarMovies = res.results;
      })
      //call for the crew
      this.servise.get("movie", id.params.id+"/credits").subscribe((res: any)=>{
        this.mainCast = DataHelper.MapJob(res.crew);
        
        this.crew = DataHelper.MostPopular(res.crew)
        this.cast = DataHelper.MostPopular(res.cast);
        
        let director:any = DataHelper.FindDirector(res.crew);
        this.director = director;
        console.log(this.cast)
        console.log(this.crew)
   
    //call for "Also directed by" only going to show up if ther is a director
    this.servise.get("person",  director.id +"/movie_credits").subscribe((responce:any)=>{
       this.alsoDirector = DataHelper.AlsoDirected(responce.crew);
          })
       })
    });
  }

  mapJob(data:any, job:string) {
    return data.filter((x:any)=>x.job == job);
  };

}
