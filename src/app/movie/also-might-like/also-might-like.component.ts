import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'also-might-like',
  templateUrl: './also-might-like.component.html',
  styleUrls: ['./also-might-like.component.css']
})
export class AlsoMightLikeComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
