import { ReviewsComponent } from './reviews/reviews.component';
import { CardLiComponent } from './card-li/card-li.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CardLiComponent,
    ReviewsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [CardLiComponent, ReviewsComponent]
})
export class CommonComponentsModule { }
