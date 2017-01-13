import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataFilterComponent } from './data-filter.component';
import {DataFilterService} from './data-filter.service';

@NgModule({
  declarations: [
    AppComponent,
    DataFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataFilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
