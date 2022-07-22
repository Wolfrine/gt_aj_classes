import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000/';

  getTest() {
    console.log('API callllled');
    return this.http.get(this.rootURL);
  }

}
