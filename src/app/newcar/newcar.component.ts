import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcar',
  templateUrl: './newcar.component.html',
  styleUrls: ['./newcar.component.css']
})
export class NewcarComponent implements OnInit {
  newcarForm = new FormGroup({
    carbrand: new FormControl(''),
    carmodel: new FormControl(''),
    license: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
