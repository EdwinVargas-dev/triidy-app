import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  urlBySearch= "http://api.tvmaze.com/search/shows";
  urlByAll= "http://api.tvmaze.com/shows";

  detailShowAndCast: any;

  getShowsOfTv (paramToSearch: string) {
    let showsToSend = [];
    let urlFiltered;

    if(!paramToSearch) urlFiltered = this.urlByAll;
    else urlFiltered = this.urlBySearch + "?q=" + paramToSearch;

    this.http.get(urlFiltered).subscribe((shows: any) => {
      shows.forEach((element, index) => {
        if(index < 100){
          if (element.show) showsToSend.push(element)
          else showsToSend.push({"show":element})
        }
      });
    });
    return showsToSend
  }

  getDetailOfShow (data) {
    var dataDetail = {
      detail: {},
      castList: []
    }
    this.http.get(this.urlByAll + "/" + data.show.id).subscribe((show: any) => {
      Object.assign(dataDetail.detail, show)
      dataDetail.castList = this.getCastShow(show.id)
    })
    this.detailShowAndCast = dataDetail
    return dataDetail
  }

  getCastShow (id) {
    var dataCast = []
    this.http.get(this.urlByAll + "/" + id + "/cast").subscribe((cast: any) => {
      cast.forEach(element => {
        dataCast.push(element)
      });
    })
    return dataCast
  }
}
