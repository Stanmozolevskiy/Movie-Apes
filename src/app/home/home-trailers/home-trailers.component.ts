import { DataHelper } from './../../DataHelper';
import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'home-trailers',
  templateUrl: './home-trailers.component.html',
  styleUrls: ['./home-trailers.component.css']
})
export class HomeTrailersComponent implements OnInit {
 
  @Input() data:any;
  trailer: any = '';
  date: any ='';
  apiLoaded = false;
  closeModal!: string;
  playerVars: any = {
    'autoplay': 1,
  }

  constructor(private servise: HttpService,private modalService: NgbModal) {}

  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.servise.get("movie", this.data).subscribe((res:any)=> {
      this.trailer = res.videos.results[0];
      this.date = DataHelper.FormatDate(res.videos.results[0].published_at)
    })
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
