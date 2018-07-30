import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-rounting.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule, MatSidenavModule, MatButtonModule,MatProgressBarModule, MatDialogModule, MatInputModule, MatRadioModule, MatListModule, MatSelectModule} from '@angular/material';

import { IconMenu, IconInfo, IconCompass, IconPocket, IconHeart } from 'angular-feather/angular-feather';

import { SwiperModule } from 'angular2-useful-swiper';

import 'hammerjs';
import { InfoPopupComponent } from './info-popup/info-popup.component';
import { BlocksComponent } from './blocks/blocks.component';
import { SurprisePopupComponent } from './surprise-popup/surprise-popup.component';

import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    InfoPopupComponent,
    BlocksComponent,
    SurprisePopupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    BrowserAnimationsModule,
    SwiperModule,
    IconMenu,
    IconInfo,
    IconCompass,
    IconPocket,
    IconHeart,
    CookieModule.forRoot()
  ],
  entryComponents: [
    InfoPopupComponent,
    SurprisePopupComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
