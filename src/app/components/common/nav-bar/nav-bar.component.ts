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

        this.appservice.getSessionData().subscribe(x => {
            this.userDetails = x;
            if (this.userDetails.acc_type == "") {
                this.router.navigate(['error']);
            }
        });

        console.log(this.userDetails);



        setTimeout(() => {
            this.pageLoad = 0;
        }, 500);
    }

}
