import {Component, OnInit, Input } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Videos } from 'src/app/models/Videos';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'trailers',
  templateUrl: './trailers.component.html',
  styleUrls: ['./trailers.component.css']
})
export class TrailersComponent implements OnInit {
  @Input() data!:Videos;
  apiLoaded = false;
  closeModal!: string;
  modalWidth!: number;
  modalHight!: number;
  transform!: number;
  @Input() textColor: string = "white";

  playerVars: any = {
      'autoplay': 1,
  }

  constructor(private modalService: NgbModal,private deviceService: DeviceDetectorService) { }
    
  triggerModal(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
          this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  ngOnInit(): void {
    this.setModalDimentions();
    // console.log(this.deviceService.getDeviceInfo())
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
  
  private setModalDimentions(){
    switch (this.deviceService.getDeviceInfo().deviceType) {
      case "tablet":
        this.modalHight = 540;
        this.modalWidth = 960;
        this.transform = 70;
        break;
      case "mobile":
        this.modalHight = 240;
        this.modalWidth = 350;
        this.transform = 110;
        break;
      default:
        this.modalHight = 540;
        this.modalWidth = 960;
        this.transform = 30;
        break;
    }
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

  formatDate(date: string){
    if(!date) return "";
 
     return new Intl.DateTimeFormat('en-US', {month: "short", day: "numeric", year: "numeric" } )
             .format(new Date(date));
   }
}
