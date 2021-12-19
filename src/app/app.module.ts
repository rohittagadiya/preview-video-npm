import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VideoPreviewModule } from 'projects/video-preview/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VideoPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
