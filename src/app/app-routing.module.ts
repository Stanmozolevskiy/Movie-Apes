import { MoviesComponent } from './movies/movies.component';
import { SingleMovieComponent } from './movie/single-movie/single-movie.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: SingleMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
