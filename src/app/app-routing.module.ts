import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewuserComponent } from './newuser/newuser.component';
import { NewcarComponent } from './newcar/newcar.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'newuser', component: NewuserComponent},
  {path: 'newcar', component: NewcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
