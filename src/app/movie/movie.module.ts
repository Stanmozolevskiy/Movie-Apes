import { CommonComponentsModule } from './../common-components/common-components.module';
import { HomeTrailersComponent } from './../home/home-trailers/home-trailers.component';
import { DescriptionComponent } from './../home/blog-post/description/description.component';
import { BlogPostComponent } from './../home/blog-post/blog-post.component';
import { HomeComponent } from './../home/home.component';
import { TopFiveListComponent } from './../top-five-list/top-five-list.component';
import { TrailersComponent } from './trailers/trailers.component';
import { AlsoMightLikeComponent } from './also-might-like/also-might-like.component';
import { AlsoDirectedByComponent } from './also-directed-by/also-directed-by.component';
import { CrewAndCastComponent } from './crew-and-cast/crew-and-cast.component';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
    SingleMovieComponent,
    MovieInfoComponent,
    CrewAndCastComponent,
    AlsoDirectedByComponent,
    AlsoMightLikeComponent,
    TrailersComponent,
    TopFiveListComponent,
    HomeComponent,
    BlogPostComponent,
    DescriptionComponent,
    HomeTrailersComponent,
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
