import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'

@Component({
  selector: 'app-demo-test',
  templateUrl: './demo-test.component.html',
  styleUrls: ['./demo-test.component.scss']
})
export class DemoTestComponent implements OnInit {

  apiObj = {};

  constructor(private appservice: AppService) { }

  ngOnInit(): void {
    console.log('API call');
    this.appservice.getTest().subscribe(apiObj => (this.apiObj = apiObj));
  }

}
