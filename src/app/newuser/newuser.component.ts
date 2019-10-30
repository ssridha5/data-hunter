import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

}
