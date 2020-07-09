import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from "./home/home.module";
import { AboutModule } from "./about/about.module";
import { IdeasModule } from "./ideas/ideas.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    IdeasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
