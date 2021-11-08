import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-button-empty',
  template: `
   <a href={{href}} class="btn
   btn-outline-light d-flex
   align-items-center
   justify-content-center
   w-lg-220rem h-52rem" tabindex="0">{{text}}</a>
  `,
  styleUrls: ['./big-button-empty.component.css']
})
export class BigButtonEmptyComponent implements OnInit {

  constructor() { }
  @Input() text!: string;
  @Input() href!: string;

  ngOnInit(): void {
  }

}
