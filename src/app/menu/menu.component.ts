import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";
import { AppComponent } from "../app.component";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showsList: any;
  textToSearch: string;

  constructor(public req: RequestService, public appComponent:AppComponent) { }

  ngOnInit(): void {
  }

   getShowsOfTvFunc(paramToShow: string){
     this.appComponent.showsList = this.req.getShowsOfTv(paramToShow);
   }

}
