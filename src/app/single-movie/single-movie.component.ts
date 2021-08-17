import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
   data:any = "";
   
  constructor(private servise: HttpService){}
    
  ngOnInit(): void {
    this.servise.get('movie','6114').subscribe(response => {
        console.log(response);
        this.data = response; 
    })
  }
}
