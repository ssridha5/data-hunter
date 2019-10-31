import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { DatabaseService } from '../database.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private dbs: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dbs
      .validateLogin(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(x => console.log(x));
      this.router.navigate(['/home']);
  }

  goToNewUser(){
    this.router.navigate(['/newuser']);
  }

  getUsername() {
    return this.loginForm.value.username;
  }

}
