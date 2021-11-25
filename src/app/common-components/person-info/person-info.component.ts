import { Person } from 'src/app/models/Person';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input() data!:Person;
  @Input() birthday!:string;
  @Input() deathday!:string;
  @Input() biography!:string;
  constructor() { }
  
  ngOnInit(): void {
  }

}
