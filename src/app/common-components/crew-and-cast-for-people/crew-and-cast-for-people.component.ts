import { Component, Input, OnInit } from '@angular/core';
import { Cast } from 'src/app/models/Cast';
import { Crew } from 'src/app/models/Crew';

@Component({
  selector: 'app-crew-and-cast-for-people',
  templateUrl: './crew-and-cast-for-people.component.html',
  styleUrls: ['./crew-and-cast-for-people.component.css']
})
export class CrewAndCastForPeopleComponent implements OnInit {

  constructor() { }
  @Input() crew!:Crew[];
  @Input() cast!:Cast[];
  
  ngOnInit(): void {
  }

}
