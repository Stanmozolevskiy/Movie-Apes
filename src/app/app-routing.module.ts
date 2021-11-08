import { TvShowsComponent } from './tv-shows/tv-shows/tv-shows.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movie/movies/movies.component';
import { SingleMovieComponent } from './movie/single-movie/single-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: SingleMovieComponent },
  { path: 'tvshows', component: TvShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
