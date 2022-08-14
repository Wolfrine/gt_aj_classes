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

    public go_to(url: string) {
        this.router.navigate([url]);
    };

    check_admin_access() {
        var access = false;
        if (this.userDetails) {
            access = this.userDetails['acc_type_code'].every(
                (x: string) => ['SA', 'ADM'].includes(x)
            );
        }
        return access;
    };

    ngOnInit(): void {

        this.userDetails = {
            fullname: '',
            acc_type: 'Guest'
        }

        // Subsribe to Appservice userDetails subject 
        // This can be used accross child components
        this.appservice.userDetails.subscribe(z => { this.userDetails = z });

        // Check session
        this.appservice.getSessionData().subscribe({
            next: (v: any) => {
                if (v != null && v.hasOwnProperty('acc_type_code')) {
                    v["acc_type_code"] = v["acc_type_code"].split(",");

                    //Set userDetails in AppService
                    this.appservice.userDetails.next(v);
                }
                else {
                    this.router.navigate(['error']);
                }
                if (this.userDetails == null) {
                    this.router.navigate(['error']);
                }
                else {
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