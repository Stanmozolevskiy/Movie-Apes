import { CommonComponentsModule } from './../common-components/common-components.module';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { DescriptionComponent } from './blog-post/description/description.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PopularActorsComponent } from './popular-actors/popular-actors.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';



@NgModule({
  declarations: [
    HomeComponent,
    BlogPostComponent,
    DescriptionComponent,
    PopularActorsComponent,
    UpcomingMoviesComponent
  ],
  imports: [
    CommonModule,
    YouTubePlayerModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule
  ]
})
export class HomeModule { }
