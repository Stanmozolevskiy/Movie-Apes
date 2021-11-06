import { CommonComponentsModule } from './../common-components/common-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MoviesComponent } from './movies/movies.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MoviesComponent,
    SingleMovieComponent,
    MovieInfoComponent
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
