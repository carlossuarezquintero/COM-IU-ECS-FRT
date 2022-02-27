import { NgModule } from '@angular/core';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


import { BrowserModule } from '@angular/platform-browser';

import {NotificationModule} from './services';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '@src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatDateFormats, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];
import {ButtonModule} from '@app/shared/buttons';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

import { MenuListComponent } from './components/menu-list/menu-list.component';

const APP_DATE_FORMATS: MatDateFormats = {
    parse: {
      dateInput: { day: 'numeric', month: 'numeric', year: 'numeric'},
    },
    display: {
       dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
       monthYearLabel: {year: 'numeric', month: 'short'},
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'}
    }
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,


    provideFirebaseApp(() => initializeApp(environment.firebase.config)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),

    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    BrowserAnimationsModule,
    MatNativeDateModule,
    ButtonModule,
    StoreDevtools,
    NotificationModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
