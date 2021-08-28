import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
