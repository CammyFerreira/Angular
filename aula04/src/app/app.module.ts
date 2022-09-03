import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExEventComponentComponent } from './views/ex-event-component/ex-event-component.component';
import { ChangeImageComponent } from './views/change-image/change-image.component';
import { ChangeTextComponent } from './views/change-text/change-text.component';
import { ChangeDivComponent } from './views/change-div/change-div.component';

@NgModule({
  declarations: [
    AppComponent,
    ExEventComponentComponent,
    ChangeImageComponent,
    ChangeTextComponent,
    ChangeDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
