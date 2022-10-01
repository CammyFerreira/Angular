import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exemplo01Component } from './views/exemplo01/exemplo01.component';
import { Ex01Component } from './views/ex01/ex01.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo01Component,
    Ex01Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
