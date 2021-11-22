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
page:number = 1;
totalItems!:number;
genres!:Genres[];
query!:string;

  constructor(private searchDataservice: SearchDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((query:any)=> {
      this.query = query.params.query;
      this.handlePageChange(this.page);
    })
    this.searchDataservice.getGenres().subscribe((res:GenreResponce)=> {
      this.genres = res.genres;
    });
  }
  handlePageChange(page:any){
    this.page = page;
    this.searchDataservice.getAll(page, this.query).subscribe((res:MovieResponce)=>{
      this.data = res.results
      this.totalItems = res.total_results;
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
