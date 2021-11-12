import { Cast } from './Cast';
import { Crew } from './Crew';
import { KeyWords } from './KeyWords';
import{Genres} from './Genres'
import { Reviews } from './Reviews';
import { Videos } from './Videos';

export class Movie {
    constructor(
      public adult : boolean,
      public backdrop_path : string,
      public budget : number,
      public genres: Genres[],
      public genre_ids : number[],
      public homepage: string,
      public overview : string,
      public first_air_date: string,
      public id : number,
      public imdb_id : string,
      public original_language : string,
      public original_title : string,
      public original_name : string,
      public ovierview : string,
      public popularity : number,
      public poster_path : string,
      public reviews: {results:Reviews[]},
      public keywords: {keywords: KeyWords[],results: KeyWords[]},
      public production_companies: {
        id: number,
        name: string
      }[],
      public production_countries: {
        iso_3166_1: string,
        name: string
      }[],
      public release_date : string,
      public revenue : number,
      public runtime : number,
      public spoken_languages: {
        iso_3166_1: string,
        name: string
      }[],
      public status : string,
      public credits: {
          crew: Crew[],
          cast: Cast[] 
      },
      public similar: {
        page: number,
        results: Movie[],
        total_pages: number,
        total_results: number
      },
      public title : string,
      public tagline : string,
      public video : boolean,
      public videos: {results: Videos[]},
      public vote_average : number,
      public vote_count : number) { }
  }
  