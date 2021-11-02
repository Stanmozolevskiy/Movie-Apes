import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Movie } from 'src/app/models/Movie';


@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() data!:number;
  description!:string;

  constructor(private servise: HttpService) { }

  ngOnInit(): void {
    this.servise.get("movie", this.data).subscribe( (res:Movie)=> {
      this.description = res.tagline.length > 0 ? res.tagline : res.overview.split(" ").slice(0,7).join(" ") + " ...";
     });
  }

}
