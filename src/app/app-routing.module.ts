import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { NewcarComponent } from './newcar/newcar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyroutesComponent } from './myroutes/myroutes.component';
import { MycarsComponent } from './mycars/mycars.component'


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'newuser', component: NewuserComponent},
  {path: 'newcar', component: NewcarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'myprofile', component: MyprofileComponent},
  {path: 'myroutes', component: MyroutesComponent},
  {path: 'mycars', component: MycarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
