import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-li',
  template: `
  <span *ngFor="let item of data; index as i">
    <a *ngIf="item" href="../single-movies/single-movies-v1.html" class="h-g-primary" tabindex="0">
    {{item}}
    </a>
  </span>`,
  styleUrls: ['./card-li.component.css']
})
export class CardLiComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
