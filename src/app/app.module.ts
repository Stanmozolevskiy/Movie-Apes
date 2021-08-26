import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleMovieComponent } from './movie/single-movie/single-movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { CardLiComponent } from './card-li/card-li.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlsoDirectedByComponent } from './movie/also-directed-by/also-directed-by.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleMovieComponent,
    MoviesComponent,
    CardLiComponent,
    NavbarComponent,
    AlsoDirectedByComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
