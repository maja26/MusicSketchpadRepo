import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SketchpadComponent } from './sketchpad/sketchpad.component'
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule}from '@angular/material/grid-list';
import {MatIconModule}from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SketchpadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
