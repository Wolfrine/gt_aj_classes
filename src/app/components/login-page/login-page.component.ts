import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppService } from '../../app.service';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    hide = true;

    UserData: any;
    message_body: any;
    g_b: any;

    login: any;
    check_auto_login: any;

    constructor(private router: Router, private appservice: AppService, @Inject(DOCUMENT) document: Document) {

    }



    ngOnInit(): void {
        this.g_b = document.getElementById('g_button')!.childNodes.length;
        console.log(this.g_b);


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

                this.appservice.g_login(this.UserData).subscribe(x => {
                    this.message_body = x;

                    this.appservice.setSessionData(x).subscribe(y => {
                        console.log(y);
                        if (this.message_body['status'] == 'success') {
                            setTimeout(() => {
                                this.router.navigate(['home']);
                            }, 1000);
                        }
                    });


                }
                );
            }
        }
    }

}
