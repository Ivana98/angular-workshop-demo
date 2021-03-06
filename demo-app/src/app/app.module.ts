import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BaseModule } from './base/base.module';
import { RoutingExampleModule } from './routing-example/routing-example.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { SendingRequestsModule } from './sending-requests/sending-requests.module';
import { FormsExampleModule } from './forms-example/forms-example.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    BaseModule,
    AppRoutingModule,
    RoutingExampleModule,
    SendingRequestsModule,
    FormsExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
