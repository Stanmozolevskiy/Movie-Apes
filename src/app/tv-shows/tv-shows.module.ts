import { NgxPaginationModule } from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { CommonComponentsModule } from './../common-components/common-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SingleTvShowComponent } from './single-tv-show/single-tv-show.component';



@NgModule({
  declarations: [
    TvShowsComponent,
    SingleTvShowComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    YouTubePlayerModule,
    CommonComponentsModule
  ]
})
export class TvShowsModule { }
