import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'top-five-list',
  templateUrl: './top-five-list.component.html',
  styleUrls: ['./top-five-list.component.css']
})
export class TopFiveListComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
