import { TopFiveListComponent } from './top-five-list/top-five-list.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TrailersComponent } from './trailers/trailers.component';
import { CrewAndCastComponent } from './crew-and-cast/crew-and-cast.component';
import { AlsoMightLikeComponent } from './also-might-like/also-might-like.component';
import { AlsoDirectedByComponent } from './also-directed-by/also-directed-by.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CardLiComponent } from './card-li/card-li.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CardLiComponent,
    ReviewsComponent,
    AlsoDirectedByComponent,
    AlsoMightLikeComponent,
    CrewAndCastComponent,
    TrailersComponent,
    TopFiveListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,   
    YouTubePlayerModule
  ],
  exports: [
    CardLiComponent,
    ReviewsComponent,
    AlsoDirectedByComponent,
    AlsoMightLikeComponent,
    CrewAndCastComponent,
    TrailersComponent,
    TopFiveListComponent
  ]
})
export class CommonComponentsModule { }
