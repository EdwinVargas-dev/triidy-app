import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input("detailDataShow") showDetailSel;

  dataToShow;
  dataToCast;
  imgLink = "";

  constructor(private req: RequestService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.dataToShow = changes.showDetailSel.currentValue
    this.getCast(this.showDetailSel.id)
    if(this.showDetailSel['image']) this.imgLink = this.showDetailSel.image.original

    console.log(this.showDetailSel)
  }

  htmlEntities(str) {
    return String(str).replace(/<\/?[^>]+(>|$)/g, ' ');
  }

  getCast(dataShowId){
    this.dataToCast = this.req.getCastShow(dataShowId);
    console.log(this.dataToCast)
  }

}
