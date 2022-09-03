import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExInterpComponent } from './views/ex-interp/ex-interp.component';
import { Ex1Component } from './views/ex1/ex1.component';
import { Ex2Component } from './views/ex2/ex2.component';
import { Ex3Component } from './views/ex3/ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    ExInterpComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
