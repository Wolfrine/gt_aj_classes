import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    hide = true;

    UserData: any;
    message: any;

    login: any;
    check_auto_login: any;

    constructor(private router: Router, private appservice: AppService) { }

    ngOnInit(): void {

        this.message = {
            text: "",
            status: "error"
        };
        var i = 1;
        this.check_auto_login = setInterval(() => {
            this.UserData = localStorage.getItem('UserData');
            if (this.UserData) { clearInterval(this.check_auto_login); this.login(); }
        }, 1000);


        this.login = function () {
            this.message.text = "Verifying"; this.message.status = "checking";

            if (this.UserData) {
                this.UserData = JSON.parse(this.UserData);

                this.appservice.g_login(this.UserData).subscribe(x =>
                    this.message = x
                );
                this.message = "Authentication successfull! Signing in ";
            }
        }


    }

}
