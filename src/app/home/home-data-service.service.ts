import { MovieResponce } from './../models/MovieResponce';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { VideoResponse } from '../models/Videos';
import { Movie } from '../models/Movie';
import { PeopleResponse } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class HomeDataServiceService {

  private BaseUrl: string ="https://api.themoviedb.org/3/";
  private key: string = '?api_key=cc061ff1d569864c484d2086a5e5e248';

  constructor(private HttpClient: HttpClient) { }

  getVideos(subject: string, id: number):Observable<VideoResponse>{
    return this.HttpClient.get<VideoResponse>(`${this.BaseUrl}/${subject}/${id}/videos${this.key}`);
  };
  getPopular(subject: string, page:number=1 ): Observable<MovieResponce>{
    return this.HttpClient.get<MovieResponce>(`${this.BaseUrl}${subject}/popular${this.key}&page=${page}`)
  };
  getMovie(subject: string, id: number, apprend: string = "&append_to_response=videos,credits,reviews,keywords,similar"):Observable<Movie>{
    return this.HttpClient.get<Movie>(`${this.BaseUrl}/${subject}/${id}${this.key}${apprend}`);
  };
  getPopularActors(page:number=1 ): Observable<PeopleResponse>{
    return this.HttpClient.get<PeopleResponse>(`${this.BaseUrl}person/popular${this.key}&page=${page}`)
  }
}
