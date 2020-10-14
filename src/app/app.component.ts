import { Component } from '@angular/core';
import { RequestService } from "./request.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showsList: any;
  showDetailSelected = {};

  constructor(private req: RequestService){}

  ngOnInit(): void {
    this.showsList = this.req.getShowsOfTv("")
  }

  getDataShow (showItem) {
    this.showDetailSelected = this.req.getDetailOfShow(showItem);
    console.log(this.showDetailSelected)
  }
}
