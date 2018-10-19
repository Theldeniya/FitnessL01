import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { FootComponent } from './foot/foot.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

// MDB Angular Free
import { ButtonsModule, WavesModule, IconsModule } from 'angular-bootstrap-md';
import { InstituteDashBoardComponent } from './institute-dash-board/institute-dash-board.component';
import { GympageComponent } from './gympage/gympage.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FootComponent,
    SignuppageComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    InstituteDashBoardComponent,
    GympageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    RouterModule
    .forRoot([
      
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
       {
        path:'sign up',
        component:SignuppageComponent
      },
      {
        path:'Login',
        component:LoginComponent
      },
      {
        path:'contact us',
        component:ContactusComponent
      },
      {
        path:'institute dash board',
        component:InstituteDashBoardComponent
      },
      {
        path:'category/gym',
        component:GympageComponent
      }



    ])

  ],


  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
