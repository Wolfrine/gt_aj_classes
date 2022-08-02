import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


    constructor() { }

    acc_name = "Guest";
    pageLoad = 1;

    public open(event: any, item: any) {
        alert('Open ' + item);
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.pageLoad = 0;
        }, 500);
    }

}
