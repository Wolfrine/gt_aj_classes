import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide = true;

  UserData: any;
  message = "";
  login = function (this: any) {
    if (this.UserData != null) {
      this.UserData = JSON.parse(this.UserData);
      this.message = "Authentication successfull! Signing in ";
      setTimeout(() => this.router.navigate(['/home']), 15000);
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    var i = 1;
    setInterval(() => {
      this.UserData = localStorage.getItem('UserData');
      this.login();
    }, 1000);
  }

}
