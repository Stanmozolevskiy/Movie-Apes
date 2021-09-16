import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMovieComponent } from './movie/single-movie/single-movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { CardLiComponent } from './card-li/card-li.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlsoDirectedByComponent } from './movie/also-directed-by/also-directed-by.component';
import { AlsoMightLikeComponent } from './movie/also-might-like/also-might-like.component';
import { CrewAndCastComponent } from './movie/crew-and-cast/crew-and-cast.component';
import { TrailersComponent } from './movie/trailers/trailers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MovieInfoComponent } from './movie/movie-info/movie-info.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TopFiveListComponent } from './top-five-list/top-five-list.component';
import { HomeComponent } from './home/home.component';
import { BlogPostComponent } from './home/blog-post/blog-post.component';
import { DescriptionComponent } from './home/blog-post/description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleMovieComponent,
    MoviesComponent,
    CardLiComponent,
    NavbarComponent,
    AlsoDirectedByComponent,
    AlsoMightLikeComponent,
    CrewAndCastComponent,
    TrailersComponent,
    MovieInfoComponent,
    ReviewsComponent,
    TopFiveListComponent,
    HomeComponent,
    BlogPostComponent,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,YouTubePlayerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
