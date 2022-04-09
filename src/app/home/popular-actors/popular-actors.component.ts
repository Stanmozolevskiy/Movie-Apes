import { PeopleResponse, Person } from './../../models/Person';
import { Component, OnInit } from '@angular/core';
import { HomeDataServiceService } from '../home-data-service.service';
import { PeopleDataService } from 'src/app/people/people-data.service';
import { DataHelper } from 'src/app/DataHelper';

@Component({
  selector: 'app-popular-actors',
  templateUrl: './popular-actors.component.html',
  styleUrls: ['./popular-actors.component.css']
})
export class PopularActorsComponent implements OnInit {
popularActors: Person[]= [];

  constructor(private homeDateService: HomeDataServiceService, private peopleDataservice: PeopleDataService,) { }

  ngOnInit(): void {
    this.homeDateService.getPopularActors(1).subscribe( (res:PeopleResponse)=> {
        
      res.results.slice(0,2).forEach((person:Person) => {
            this.peopleDataservice.get('person', person.id).subscribe((res:Person) => {
              res.birthday = DataHelper.FormatDate(res.birthday);
              res.biography = DataHelper.ShortBiography(res.biography);
              this.popularActors.push(res);
           });
        })
     });
  }
}
