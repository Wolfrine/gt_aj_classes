import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppService } from '../../app.service';
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    hide = true;

    UserData: any;
    message_body: any;

    login: any;
    check_auto_login: any;

    constructor(private router: Router, private appservice: AppService, private titleService: Title) {
        this.titleService.setTitle("Sign in to Growth Tutorials");
    }



    ngOnInit(): void {
        this.message_body = {
            message: "",
            status: "error"
        };

        this.check_auto_login = setInterval(() => {
            this.UserData = localStorage.getItem('UserData');
            if (this.UserData) {
                clearInterval(this.check_auto_login);
                this.login();
            }
        }, 1000);


        this.login = function () {
            this.message_body.message = "Verifying";
            this.message_body.status = "checking";

            if (this.UserData) {
                this.UserData = JSON.parse(this.UserData);

                this.appservice.g_login(this.UserData).subscribe({
                    next: (x) => {
                        this.message_body = x;

                        this.appservice.setSessionData(x).subscribe(y => {
                            if (this.message_body['status'] == 'success') {
                                setTimeout(() => {
                                    this.router.navigate(['home']);
                                }, 1000);
                            }
                        });
                    },
                    error: (e) => {
                        this.message_body.message = "Error connecting. Kindly try again later";
                        this.message_body.status = "error";
                    },
                    complete: () => { console.info('complete') }
                });
            }
        }
    }

}