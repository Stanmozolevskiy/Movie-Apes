import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
