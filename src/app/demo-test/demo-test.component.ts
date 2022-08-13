import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-demo-test',
    templateUrl: './demo-test.component.html',
    styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {

    apiObj = {};

    pobj = { a: 1 };

    constructor(private appservice: AppService) { }

    ngOnInit(): void {
        console.log('API call');
        this.appservice.g_login(this.pobj).subscribe(apiObj => (this.apiObj = apiObj));
    }

}
