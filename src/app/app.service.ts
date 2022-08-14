import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AppService {
    KEY_TO_READ = environment.production;

    // Default empty structure for User details as obtained after sign in
    userDetails = new Subject();

    setUserDetails(v: any) {
        this.userDetails.next(v);
    }

    // value["acc_type_code"] = value["acc_type_code"].split(",");
    // this.userDetails.next(value);

    constructor(private http: HttpClient) {
    }




    //rootURL = 'https://growthtutorials.in/api';

    // Local
    rootURL = this.KEY_TO_READ ? 'https://growthtutorials.in/api' : 'http://localhost:3000/api';

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

    closeSession() {
        return this.http.get(this.rootURL + '/auth/closeSession', { withCredentials: true });
    }

}
