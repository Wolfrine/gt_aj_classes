import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-landing-dashboard',
    templateUrl: './landing-dashboard.component.html',
    styleUrls: ['./landing-dashboard.component.scss']
})
export class LandingDashboardComponent implements OnInit {

    constructor(private appservice: AppService, private titleService: Title) {
        this.titleService.setTitle("Growth Tutorials : Dashboard");
    }

    userDetails: any;
    check_admin_access: any;

    ngOnInit(): void {
        this.appservice.userDetails.subscribe(v => { console.log(v); this.userDetails = v });

        this.check_admin_access = function () {
            return this.userDetails['acc_type_code'].every((x: string) => ['SA', 'ADM'].includes(x));
        }

    }


}
