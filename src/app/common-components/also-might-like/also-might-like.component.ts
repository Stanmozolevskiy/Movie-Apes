import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'also-might-like',
  templateUrl: './also-might-like.component.html',
  styleUrls: ['./also-might-like.component.css']
})
export class AlsoMightLikeComponent implements OnInit {
  @Input() data!:Movie[];
  url!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url =  this.router.routerState.snapshot.url.split("/")[1];
  }

}
