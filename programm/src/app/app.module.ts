import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SketchpadComponent } from './sketchpad/sketchpad.component'
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlsComponent } from './sketchpad/controls/controls.component';


const appRoutes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'sketchpad', component: SketchpadComponent },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/landingpage',
    pathMatch: 'full'
  },
];


@NgModule({
  declarations: [
    AppComponent,
    SketchpadComponent,
    ControlsComponent,
    LandingpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
