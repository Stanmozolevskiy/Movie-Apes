import { Cast } from '../../models/Cast';
import { Crew } from '../../models/Crew';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crew-and-cast',
  templateUrl: './crew-and-cast.component.html',
  styleUrls: ['./crew-and-cast.component.css']
})
export class CrewAndCastComponent implements OnInit {
  @Input() crew!:Crew[];
  @Input() cast!:Cast[];
  constructor() { }

  ngOnInit(): void {
  }

}
