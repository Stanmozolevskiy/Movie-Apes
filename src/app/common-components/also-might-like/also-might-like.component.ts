import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'also-might-like',
  templateUrl: './also-might-like.component.html',
  styleUrls: ['./also-might-like.component.css']
})
export class AlsoMightLikeComponent implements OnInit {
  @Input() data!:Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
