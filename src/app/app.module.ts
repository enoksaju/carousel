import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CssCarouselComponent } from './css-carousel/css-carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, CssCarouselComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
