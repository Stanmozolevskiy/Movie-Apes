import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';


@Component({
  selector: 'description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() data:any;
  description:any;

  constructor(private servise: HttpService) { }

  ngOnInit(): void {
    this.servise.get("movie", this.data).subscribe( (res:any)=> {
      this.description = res.tagline.length > 0 ? res.tagline : res.overview.split(" ").slice(0,7).join(" ") + " ...";
     });
  }

}
