import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rent-buttons',
  templateUrl: './rent-buttons.component.html',
  styleUrls: ['./rent-buttons.component.css']
})
export class RentButtonsComponent  {
  @Input() original_title!: string;
  @Input() release_date!: string;

}
