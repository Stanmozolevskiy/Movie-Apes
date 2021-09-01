import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews:any;
  constructor() { }

  ngOnInit(): void {
  }

  formatReview(reviewObject:any){
    if(reviewObject){
    let arr = reviewObject.content.split(" ");
    if(arr.length >= 100) return arr.slice(0,100).join(" ") + " ..." 
      
    return reviewObject.content;
    }  
  }

 formatDate(date: string){
    if(!date) return null;
 
     return new Intl.DateTimeFormat('en-US', {month: "short", day: "numeric", year: "numeric" } )
             .format(new Date(date));
   }

}
