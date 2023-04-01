import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ACompComponent } from './a-comp/a-comp.component';
import { BCompComponent } from './b-comp/b-comp.component';
import { CCompComponent } from './c-comp/c-comp.component';
import { B2CompComponent } from './b2-comp/b2-comp.component';
import { C2CompComponent } from './c2-comp/c2-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ACompComponent,
    BCompComponent,
    CCompComponent,
    B2CompComponent,
    C2CompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
