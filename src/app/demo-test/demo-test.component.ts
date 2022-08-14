import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-demo-test',
    templateUrl: './demo-test.component.html',
    styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {


    breakpoint = 1;

    constructor(private appservice: AppService) { }

    ngOnInit(): void {
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
    }


    onResize(event: any) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
    }
}
