import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    // Default empty structure for User details as obtained after sign in
    userDetails = {
        fullname: "Guest",
        firstname: "",
        acc_type: "",
        acc_img: "",
        id: 0
    };

    constructor(private http: HttpClient) { }

    rootURL = 'https://growthtutorials.in/api';

    // Local
    //rootURL = 'http://localhost:3000/api';

    g_login(postObj: {}) {
        return this.http.post(this.rootURL + '/auth/g_login/', { postObj });
    }

    setSessionData(postObj: {}) {
        console.log(postObj);
        return this.http.post(this.rootURL + '/auth/setSessionData/', { params: postObj }, { withCredentials: true });
    }

    getSessionData() {
        return this.http.get(this.rootURL + '/auth/getSessionData', { withCredentials: true });
    }

}
