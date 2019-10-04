import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
