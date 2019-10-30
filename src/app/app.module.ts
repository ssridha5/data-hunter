import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewcarComponent } from './newcar/newcar.component';
import { NewuserComponent } from './newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewcarComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
