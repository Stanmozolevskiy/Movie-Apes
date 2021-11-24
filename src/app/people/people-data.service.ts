import { Person } from 'src/app/models/Person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleResponse } from '../models/Person';

@Injectable({
  providedIn: 'root'
})

export class PeopleDataService {
  
  private BaseUrl: string ="https://api.themoviedb.org/3/";
  private key: string = '?api_key=cc061ff1d569864c484d2086a5e5e248';
  private popular: string = `popular`;
  private language: string = `&language=en-US`;

  constructor(private HttpClient: HttpClient) { }

    getAll(page:number=1, subject: string="person"): Observable<PeopleResponse> {
      return this.HttpClient
      .get<PeopleResponse>(`${this.BaseUrl}${subject}/${this.popular}${this.key}${this.language}&page=${page}`)
      };
      
    get(subject: string, id: number, apprend: string = "&append_to_response=videos,credits,reviews,keywords,similar"):Observable<Person>{
      return this.HttpClient.get<Person>(`${this.BaseUrl}/${subject}/${id}${this.key}${apprend}`);
    };
}
