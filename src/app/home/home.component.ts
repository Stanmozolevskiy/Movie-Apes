import { DataHelper } from './../DataHelper';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerMovie:any = "";
  headerMovies: any = "";
  headerMovieTitle: any = "";

  constructor(private servise: HttpService) { }

  ngOnInit(): void {
    this.servise.getPopular("movie").subscribe( (res:any)=> {
      this.headerMovies = DataHelper.MostPopularNowPlaying(res.results).slice(0,4); 
      let headerMovie = DataHelper.MostPopularNowPlaying(res.results)[4];
      this.headerMovie = headerMovie

      this.servise.get("movie", headerMovie.id).subscribe( (res:any)=> {
      this.headerMovieTitle = res.title + ": " + res.tagline;
       });

     });
  }

}
