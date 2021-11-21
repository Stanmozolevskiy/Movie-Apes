import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonComponentsModule } from '../common-components/common-components.module';




@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxPaginationModule,
    CommonComponentsModule
  ]
})
export class SearchModule { }
