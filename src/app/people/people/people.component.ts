import { PeopleResponse } from './../../models/Person';
import { PeopleDataService } from './../people-data.service';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  data!: Person[];
  totalItems!:number;
  page!: number;
  constructor(private peopleDataService: PeopleDataService) { }

  ngOnInit(): void {
    this.handlePageChange(1);
  }

  handlePageChange(event:number = 1 ){
    this.peopleDataService.getAll(event).subscribe((res: PeopleResponse) => {
      this.data = res.results;
      this.page = res.page;
      this.totalItems = res.total_results;
    })};

}
