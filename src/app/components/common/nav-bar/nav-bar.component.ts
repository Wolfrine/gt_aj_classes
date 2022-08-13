import { Component, OnInit } from '@angular/core';
import { AppService } from './../../../app.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    userDetails: any;
    signOut: any;

    constructor(private router: Router, private appservice: AppService) { }

    pageLoad = 1;

    public open(event: any, item: any) {
        alert('Open ' + item);
    }

    ngOnInit(): void {

        this.userDetails = {
            fullname: "",
            firstname: "",
            acc_type: "",
            acc_img: "",
            id: 0
        };

        this.appservice.getSessionData().subscribe({
            next: (v: any) => {
                if (v != null && v.hasOwnProperty('acc_type_code')) {
                    v["acc_type_code"] = v["acc_type_code"].split(",");
                    this.appservice.userDetails.next(v);
                }
                this.userDetails = v;
                this.appservice.userDetails = this.userDetails;
                if (this.userDetails == null) {
                    this.router.navigate(['error']);
                }
                else {
                    if (!this.userDetails['acc_type'] && this.userDetails['acc_type'] != "") {
                        this.router.navigate(['error']);
                    }

                    setTimeout(() => {
                        this.pageLoad = 0;
                    }, 500);
                }
            },
            error: (e) => {
                this.router.navigate(['error']);
            }
        });


        this.signOut = function () {
            this.appservice.closeSession().subscribe(x => { localStorage.clear(); this.router.navigate(['login']); })
        }

    }

}