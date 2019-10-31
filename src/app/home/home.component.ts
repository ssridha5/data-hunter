import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;

  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private router:Router) {
      username: 'sid';
  }

  ngOnInit() {

  }
  onSubmit(){
    console.log(this.searchForm.value.query);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  newcar(){
    this.router.navigate(['/newcar']);
  }

}
