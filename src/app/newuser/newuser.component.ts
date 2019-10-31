import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { DatabaseService } from '../database.service'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  newuserForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });

  constructor(private router: Router, private dbs: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dbs
      .createuser(this.newuserForm.value.username,
                  this.newuserForm.value.password,
                  this.newuserForm.value.firstname,
                  this.newuserForm.value.lastname)
      .subscribe(x => console.log(x));
      this.router.navigate(['/home']);
  }

}
