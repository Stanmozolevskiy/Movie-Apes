import { DataHelper } from './../DataHelper';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  headerMovie!:any;
  headerMovies: any;

  constructor(private servise: HttpService) { }

  ngOnInit(): void {
    this.servise.getPopular("movie").subscribe( (res:any)=> {
      this.headerMovie = DataHelper.MostPopularNowPlaying(res.results)[4];
      this.headerMovies = DataHelper.MostPopularNowPlaying(res.results).slice(0,4);

      console.log(DataHelper.MostPopularNowPlaying(res.results).slice(0,4))
     });
  }

}
