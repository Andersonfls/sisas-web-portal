import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './services/theme.service';
import { NewsService } from './services/news.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import 'hammerjs';

import {
  MatCheckboxModule,
  MatButtonModule,
  MatSlideToggleModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxHmCarouselModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ThemeService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
