import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/Movie';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  @Input() data!:Movie[];
  constructor() { }
  
  ngOnInit(): void {
  }

}
