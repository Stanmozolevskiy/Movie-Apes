import { Component, OnInit } from '@angular/core';

import { TvResults } from './../../models/TvResults';
import { Tv } from './../../models/Tv';
import { TvShowsDataServiceService } from './../tv-shows-data-service.service';
import { GenreResponce } from '../../models/GenreResponce';
import { Genres } from '../../models/Genres';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {
  data!: Tv[];
  genres!: Genres[];
  totalPages!:number;
  popular!:Tv[];
  page!: number;

  constructor(private tvShowsDataService: TvShowsDataServiceService) { }

  ngOnInit(): void {
    this.handlePageChange(1);
    this.tvShowsDataService.getGenres().subscribe((res:GenreResponce)=> {
      this.genres = res.genres;
    });
    this.tvShowsDataService.getPopular("tv").subscribe((res: TvResults)=> {
     this.popular = res.results.slice(0,5);
    });   
  }
  handlePageChange(event:number = 1 ){
    this.tvShowsDataService.getAll(event).subscribe((res: TvResults) => {
      this.data = res.results;
      this.page = res.page;
      this.totalPages = res.page;
    });
  }

  // mappes list of gsenres from one API call to a call that provides the movies
  // and returns an array with genres 
  mapGenres(movieObject:Tv, genresArray:Genres[]){
    if(movieObject && genresArray){
      return movieObject.genre_ids.map((genreFromMovie:any)=> 
               genresArray.filter((allGenres:Genres) => genreFromMovie == allGenres.id))
                         .map((gerne: Genres[]) => gerne[0]?.name).slice(0,2); 
    }
    return null;
  }

}
