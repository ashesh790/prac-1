import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { LillyComponent } from './lilly/lilly.component';
import { Lilly2Component } from './lilly2/lilly2.component';

@NgModule({
  declarations: [
    AppComponent,
    LillyComponent,
    Lilly2Component,
  ],
  imports: [
    BrowserModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
