import { AppRoutingModule } from './routing/app-rounting.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import {MdToolbarModule, MdSidenavModule, MdButtonModule,MdProgressBarModule} from '@angular/material';

import { IconMenu, IconInfo, IconCompass, IconPocket, IconHeart } from 'angular-feather/angular-feather';

import { SwiperModule } from 'angular2-useful-swiper';

import 'hammerjs';
import { InfoPopupComponent } from './info-popup/info-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    InfoPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdProgressBarModule,
    SwiperModule,
    IconMenu,
    IconInfo,
    IconCompass,
    IconPocket,
    IconHeart
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
