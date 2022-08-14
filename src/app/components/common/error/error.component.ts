import { Component, OnInit } from '@angular/core';
import { AppService } from './../../../app.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

    constructor(private appservice: AppService, private router: Router) { }

    ngOnInit(): void {
    }

    public go_to(url: string) {
        this.router.navigate([url]);
    };

}
