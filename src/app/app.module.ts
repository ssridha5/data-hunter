import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewcarComponent } from './newcar/newcar.component';
import { NewuserComponent } from './newuser/newuser.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './database.service';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyroutesComponent } from './myroutes/myroutes.component';
import { MycarsComponent } from './mycars/mycars.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewcarComponent,
    NewuserComponent,
    HomeComponent,
    MyprofileComponent,
    MyroutesComponent,
    MycarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
