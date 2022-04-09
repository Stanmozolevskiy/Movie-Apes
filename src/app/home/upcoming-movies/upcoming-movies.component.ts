import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { MovieResponce } from 'src/app/models/MovieResponce';
import { MovieDataServiceService } from 'src/app/movie/movie-data-service.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  popular!:Movie[];
  constructor(private movieDataservice: MovieDataServiceService) { }

  ngOnInit(): void {
    this.movieDataservice.getPopular("movie").subscribe((res: MovieResponce)=> {
      this.popular = res.results.slice(0,10);
     });
  }
}
