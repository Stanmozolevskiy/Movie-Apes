import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreResponce } from 'src/app/models/GenreResponce';
import { Genres } from 'src/app/models/Genres';
import { Movie } from 'src/app/models/Movie';
import { MovieResponce } from 'src/app/models/MovieResponce';
import { SearchDataService } from '../search-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
data!:Movie[];
page!:number;
totalPages!:number;
genres!:Genres[];
popular!:Movie[];
query!:string;

  constructor(private searchDataservice: SearchDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((query:any)=> {
      this.query = query.params.query;
      this.handlePageChange(1);
    })
    this.searchDataservice.getGenres().subscribe((res:GenreResponce)=> {
      this.genres = res.genres;
    });
    this.searchDataservice.getPopular("movie").subscribe((res: MovieResponce)=> {
      this.popular = res.results.slice(0,5);
     });
  }

  handlePageChange(page:number = 1){
    this.searchDataservice.getAll(page, this.query).subscribe((res:MovieResponce)=>{
      console.log(res)
      this.data = res.results
      this.page = res.page;
      this.totalPages = res.total_pages;
    });
  }

  // mappes list of gsenres from one API call to a call that provides the movies
  // and returns an array with genres 
  mapGenres(movieObject:Movie, genresArray:Genres[]){
    if(movieObject && genresArray){
      return movieObject.genre_ids.map((genreFromMovie:number)=> 
              genresArray.filter((allGenres:Genres) => genreFromMovie == allGenres.id))
                        .map((gerne: Genres[]) => gerne[0].name).slice(0,2); 
    }
    return null;
  }
}
