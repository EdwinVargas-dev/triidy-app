import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {}

  urlBySearch= "http://api.tvmaze.com/search/shows";
  urlByAll= "http://api.tvmaze.com/shows";

  dataToSearchOfDetailShow: any;

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
    console.log(data)
    var dataDetail = {}
    this.http.get(this.urlByAll + "/" + data.show.id).subscribe((show: any) => {
      Object.assign(dataDetail, show)
    })
    this.dataToSearchOfDetailShow = dataDetail
    console.log(dataDetail)
    return dataDetail
  }

  getCastShow (id) {
    console.log(id)
    var dataCast = []
    this.http.get(this.urlByAll + "/" + id + "/cast").subscribe((cast: any) => {
      cast.forEach(element => {
        dataCast.push(element)
      });
    })
    return dataCast
  }
}
