import { NgxPaginationModule } from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { CommonComponentsModule } from './../common-components/common-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    MoviesComponent,
    SingleMovieComponent
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
export class MovieModule { }
