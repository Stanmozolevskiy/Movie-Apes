import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  data:any = "";
  genres: any = "";
  totalPages:any = "";
  page!: number;

   
  constructor(private servise: HttpService){}
    
  ngOnInit(): void {
    this.handlePageChange(1);
    this.servise.getGenres().subscribe( (res:any)=> {
      this.genres = res.genres;
    });
  }

  handlePageChange(event:any = 1 ){
    this.servise.getAll(event).subscribe((res: any) => {
      this.data = res.results;
      this.totalPages = res.total_pages;
      this.page = res.page;
    });
  }

  // mappes list of gsenres from one API call to a call that provides the movies
  // and returns an array with genres 
  mapGenres(movieObject: any, genresArray: any):[]{
      return movieObject.map((genreFromMovie:any)=> 
              genresArray.filter((allGenres:any) => genreFromMovie == allGenres.id))
                        .map((gerne: any) => gerne[0].name).slice(0,2); 
  }
}
