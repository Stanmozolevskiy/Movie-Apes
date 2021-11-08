import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  template: `
   <a href={{href}} class="btn btn-primary
  d-flex align-items-center
  justify-content-center
  w-lg-220rem h-52rem mb-3" tabindex="0">{{text}}</a>
  `,
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() href!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
