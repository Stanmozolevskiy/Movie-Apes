import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { SinglePersonComponent } from './single-person/single-person.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    PeopleComponent,
    SinglePersonComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
  ]
})
export class PeopleModule { }
