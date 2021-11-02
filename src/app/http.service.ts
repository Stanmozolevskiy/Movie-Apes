import { GenreResponce } from './models/GenreResponce';
import { AlsoDirected } from './models/AlsoDirected';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponce } from './models/MovieResponce';
import { Movie } from './models/Movie';
import { Person } from './models/Person';


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private BaseUrl: string ="https://api.themoviedb.org/3/";
  private key: string = '?api_key=cc061ff1d569864c484d2086a5e5e248';
  private discover: string = `discover`;
  private language: string = `&language=en-US`;
  private sort: string = `&sort_by=popularity.desc`;
  private includeVideo: string = `&include_video=false`;
  private genresUrl: string = `genre/movie/list`;
  

  constructor(private HttpClient: HttpClient) { }

  get(subject: string, id: number, apprend: string = "&append_to_response=videos,credits,reviews,keywords,similar"):Observable<Movie>{
    return this.HttpClient.get<Movie>(`${this.BaseUrl}/${subject}/${id}${this.key}${apprend}`);
  };
  getPerson(id: number, apprend: string = "&append_to_response=credits"):Observable<Person>{
    return this.HttpClient.get<Person>(`${this.BaseUrl}/person/${id}${this.key}${apprend}`);
  };
  getAlsoDirected(id: number, apprend: string):Observable<AlsoDirected>{
    return this.HttpClient.get<AlsoDirected>(`${this.BaseUrl}/person/${id}${apprend}${this.key}`);
  };
  getGenres():Observable<GenreResponce>{
    return this.HttpClient.get<GenreResponce>(`${this.BaseUrl}${this.genresUrl}${this.key}${this.language}`)
  };
  getAll(page:number=1, subject: string="movie", sort: string='&sort_by=popularity.desc'): Observable<MovieResponce> {
    return this.HttpClient
    .get<MovieResponce>(`${this.BaseUrl}${this.discover}/${subject}${this.key}${this.language}${this.sort}${this.includeVideo}&page=${page}`)
    };
  getPopular(subject: string, page:number=1 ): Observable<MovieResponce>{
    return this.HttpClient.get<MovieResponce>(`${this.BaseUrl}${subject}/popular${this.key}&page=${page}`)
  }
  

}
