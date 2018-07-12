import { Injectable } from '@angular/core';
import { Banner } from './banner';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable  } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BannerService {

  private bannersUrl = "http://green-web-bookstore.herokuapp.com/api/banners";
  constructor(
    private http: HttpClient,
  ) { }
  getBanners (): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.bannersUrl);
      
  }
}
