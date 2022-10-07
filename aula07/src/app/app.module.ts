import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exemplo1Component } from './exemplo1/views/exemplo1.component';
import { Ex01Component } from './views/ex01/ex01.component';
import { Ex02Component } from './views/ex02/ex02.component';
import { Ex03Component } from './views/ex03/ex03.component';
import { ExemploNgForComponent } from './exemplo-ng-for/exemplo-ng-for.component';
import { Ex04Component } from './views/ex04/ex04.component';
import { Ex05Component } from './views/ex05/ex05.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    ExemploNgForComponent,
    Ex04Component,
    Ex05Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
