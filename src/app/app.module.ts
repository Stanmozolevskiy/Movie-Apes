import { SearchModule } from './search/search.module';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieModule } from './movie/movie.module';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { PeopleModule } from './people/people.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    AppRoutingModule,
    MovieModule,
    CommonComponentsModule,
    HomeModule,
    TvShowsModule,
    SearchModule,
    FormsModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
