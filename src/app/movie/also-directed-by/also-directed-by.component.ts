import {  Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'also-directed-by',
  templateUrl: './also-directed-by.component.html',
  styleUrls: ['./also-directed-by.component.css']
})
export class AlsoDirectedByComponent implements OnInit {
  @Input() data:any;
  @Input() director:any;
  @Input() directorBio:any;
  
  constructor() { }
  ngOnInit(): void {
  }

}
