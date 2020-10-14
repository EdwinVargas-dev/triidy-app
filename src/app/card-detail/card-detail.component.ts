import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { bottom } from '@popperjs/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  @Input() showDetailSel: any;

  constructor(private req: RequestService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showDetailSel = {
      detail: {
        name: "",
        image: { original: "" }
      },
      castList: []
    }

    if (changes.showDetailSel.currentValue['detail']) {
      this.showDetailSel = changes.showDetailSel.currentValue
    }
  }

  htmlEntities(str) {
    return String(str).replace(/<\/?[^>]+(>|$)/g, ' ');
  }
}
