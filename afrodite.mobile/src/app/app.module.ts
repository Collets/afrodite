import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-rounting.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import {MdToolbarModule, MdSidenavModule, MdButtonModule,MdProgressBarModule, MdDialogModule, MdInputModule, MdRadioModule, MdListModule, MdSelectModule} from '@angular/material';

import { IconMenu, IconInfo, IconCompass, IconPocket, IconHeart } from 'angular-feather/angular-feather';

import { SwiperModule } from 'angular2-useful-swiper';

import 'hammerjs';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { BlocksComponent } from './blocks/blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    InfoPopupComponent,
    BlocksComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdProgressBarModule,
    MdDialogModule,
    MdInputModule,
    MdRadioModule,
    MdListModule,
    MdSelectModule,
    BrowserAnimationsModule,
    SwiperModule,
    IconMenu,
    IconInfo,
    IconCompass,
    IconPocket,
    IconHeart
  ],
  entryComponents: [
    InfoPopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
