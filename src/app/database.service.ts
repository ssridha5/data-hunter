import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  validateLogin(username, password) {

    var request_data = {username: username, password: password};
    return this.http.post("http://datahunter.web.illinois.edu/login", request_data);

  }

  createuser(username, password, firstname, lastname){

    var request_data = {username: username, password: password, first_name: firstname, last_name: lastname};
    return this.http.post("http://datahunter.web.illinois.edu/create", request_data);

  }

}
