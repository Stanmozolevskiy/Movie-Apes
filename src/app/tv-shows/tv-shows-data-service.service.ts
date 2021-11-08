import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TvResults } from './../models/TvResults';
import { Tv } from './../models/Tv';
import { GenreResponce } from './../models/GenreResponce';
import { AlsoDirected } from './../models/AlsoDirected';
import { Person } from './../models/Person';
import { VideoResponse } from './../models/Videos';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class TvShowsDataServiceService {

  private BaseUrl: string ="https://api.themoviedb.org/3/";
  private key: string = '?api_key=cc061ff1d569864c484d2086a5e5e248';
  private discover: string = `discover`;
  private language: string = `&language=en-US`;
  private sort: string = `&sort_by=popularity.desc`;
  private includeVideo: string = `&include_video=false`;
  private genresUrl: string = `genre/movie/list`;

  constructor(private HttpClient: HttpClient) { }

  get(subject: string, id: number, apprend: string = "&append_to_response=videos,credits,reviews,keywords,similar"):Observable<Tv>{
    return this.HttpClient.get<Tv>(`${this.BaseUrl}/${subject}/${id}${this.key}${apprend}`);
  };
  getVideos(subject: string, id: number):Observable<VideoResponse>{
    return this.HttpClient.get<VideoResponse>(`${this.BaseUrl}/${subject}/${id}/videos${this.key}`);
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
  getAll(page:number=1, subject: string="tv", sort: string='&sort_by=popularity.desc'): Observable<TvResults> {
    return this.HttpClient
    .get<TvResults>(`${this.BaseUrl}${this.discover}/${subject}${this.key}${this.language}${this.sort}${this.includeVideo}&page=${page}`)
    };
  getPopular(subject: string, page:number=1 ): Observable<TvResults>{
    return this.HttpClient.get<TvResults>(`${this.BaseUrl}${subject}/popular${this.key}&page=${page}`)
  }
  
}
