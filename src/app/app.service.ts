import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private http: HttpClient) { }

    rootURL = 'https://growthtutorials.in/api';

    // Local
    // rootURL = 'http://localhost:3000/api';

    g_login(postObj: {}) {
        console.log('API callllled');
        return this.http.post(this.rootURL + '/auth/g_login/', { postObj });
    }

}
