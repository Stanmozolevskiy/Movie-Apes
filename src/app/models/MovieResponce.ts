import { Movie } from './Movie';
export class MovieResponce {
    constructor(
      public  page: number,
      public  results: Movie[],
      public  total_pages: number,
      public   total_results: number
      ){}
  }
  