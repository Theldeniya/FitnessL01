import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule,Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
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
import { GympageComponent } from './gympage/gympage.component';
import { SwimingpoolpageComponent } from './swimingpoolpage/swimingpoolpage.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { EditPackageDetailsComponent } from './edit-package-details/edit-package-details.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DancingpageComponent } from './dancingpage/dancingpage.component'


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
    GympageComponent,
    SwimingpoolpageComponent,
    EditInfoComponent,
    EditPackageDetailsComponent,
    SideNavComponent,
    DancingpageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ButtonsModule,
    WavesModule,
    IconsModule,
    HttpClientModule,
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
        path:'institute dash board/edit info',
        component:EditInfoComponent
      },
      {
        path:'category/gym',
        component:GympageComponent
      },
      {
        path:'category/Dancing-Acadamies',
        component:DancingpageComponent
      },
      { 
      path:'category/Swimingpool',
      component: SwimingpoolpageComponent
      },
      { 
      path:'institute dash board/Edit-Package-Details',
      component: EditPackageDetailsComponent
        },
     

    ])

  ],


  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
