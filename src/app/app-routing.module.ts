import { TvShowsComponent } from './tv-shows/tv-shows/tv-shows.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { SingleMovieComponent } from './movie/single-movie/single-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleTvShowComponent } from './tv-shows/single-tv-show/single-tv-show.component';
import { SearchComponent } from './search/search/search.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie', component: MoviesComponent },
  { path: 'movie/:id', component: SingleMovieComponent },
  { path: 'tvshow', component: TvShowsComponent },
  { path: 'tvshow/:id', component: SingleTvShowComponent },
  { path: ':query', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
