import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:3000';

  g_login(postObj: {}) {
    console.log('API callllled');
    return this.http.post(this.rootURL + '/api/auth/g_login/', { postObj });
  }

}
