import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
  private page: string = `&page=1`;
  private genresUrl = `genre/movie/list`;
  

  constructor(private HttpClient: HttpClient) { }

  get(subject: string, id: string, apprend: string = "&append_to_response=videos,credits,reviews,keywords,similar"){
    return this.HttpClient.get(`${this.BaseUrl}/${subject}/${id}${this.key}${apprend}`);
  };
  getGenres(){
    return this.HttpClient.get(`${this.BaseUrl}${this.genresUrl}${this.key}${this.language}`)
  }
  getAll(page: string='1', subject: string="movie", sort: string='&sort_by=popularity.desc'){
    return this.HttpClient
    .get(`${this.BaseUrl}${this.discover}/${subject}${this.key}${this.language}${this.sort}${this.includeVideo}&page=${page}`);
    };
  getPopular(subject: string, page="1" ){
    return this.HttpClient
    .get(`${this.BaseUrl}${subject}/popular${this.key}&page=${page}`)
  }
}
