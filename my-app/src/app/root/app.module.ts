import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ImageZoomModule} from 'angular2-image-zoom';

import { AppComponent } from './app.component';
import { HomeComponent } from '../views/home/home.component';
import { MainPageComponent } from '../views/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ImageZoomModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
