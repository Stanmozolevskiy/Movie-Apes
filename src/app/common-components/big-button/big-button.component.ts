import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  template: `
   <a href={{path}} class="btn btn-primary 
  d-flex align-items-center
  justify-content-center
  w-lg-220rem h-52rem mb-3" target="_blank" tabindex="0">{{text}}</a>
  `,
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() path!: string;

  constructor() { }

  ngOnInit(): void {
  }
}
