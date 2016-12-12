import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { IonicModule, IonicApp } from 'ionic-angular';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { AppComponent } from './web/app.component';
import { routes } from './app.routes';
import { SHARED_DECLARATIONS } from './shared'; 
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { AppConfig } from './web/app.config';

import { Layout } from './web/layout/layout.component';
import { Dashboard } from './web/dashboard/dashboard.component';

let moduleDefinition;

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AppConfig
];

if(Meteor.isCordova) {
  moduleDefinition = {
    imports: [
      //IonicModule.forRoot(AppMobileComponent)
    ],
    declarations : [
      ...SHARED_DECLARATIONS
      //...MOBILE_DECLARATIONS
    ],
    providers: [

    ],
    bootstrap: [
      IonicApp
    ],
    entryComponents: [
      
    ]
  }
}
else {
  moduleDefinition = {
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes),
      //AccountsModule,
      //AgmCoreModule.forRoot({
        //apiKey: 'AIzaSyAWoBdZHCNh5R-hB5S5ZZ2oeoYyfdDgniA'
      //}),
      //MaterialModule.forRoot()
    ],
    declarations: [
      AppComponent,
      ...SHARED_DECLARATIONS,
      Layout,
      Dashboard
    ],
    providers:[
      ...APP_PROVIDERS
      // ...ROUTES_PROVIDERS
    ],
    bootstrap: [
      AppComponent
    ]
  }
}

@NgModule(moduleDefinition)
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}