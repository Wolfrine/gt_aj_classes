import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Title } from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-dashboard',
    templateUrl: './landing-dashboard.component.html',
    styleUrls: ['./landing-dashboard.component.scss']
})
export class LandingDashboardComponent implements OnInit {

    constructor(
        private appservice: AppService,
        private titleService: Title,
        private router: Router) {

        this.titleService.setTitle("Growth Tutorials : Dashboard");
    }

    userDetails: any;
    breakpoint = 1;

    check_admin_access() {
        var access = false;
        if (this.userDetails) {
            access = this.userDetails['acc_type_code'].every(
                (x: string) => ['SA', 'ADM'].includes(x)
            );
        }
        return access;
    };

    go_to(url: string) {
        this.router.navigate([url]);
    };

    ngOnInit(): void {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
        this.appservice.userDetails.subscribe(v => {
            console.log(v); this.userDetails = v;
        });
    }


    onResize(event: any) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    }
}
