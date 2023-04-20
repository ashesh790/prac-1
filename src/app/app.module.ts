import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LillyComponent } from './lilly/lilly.component';
import { Lilly2Component } from './lilly2/lilly2.component';

@NgModule({
  declarations: [
    AppComponent,
    LillyComponent,
    Lilly2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
