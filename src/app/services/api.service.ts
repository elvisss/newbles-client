import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams, ResponseContentType } from '@angular/http';
import { AppConfig } from "../app.config";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApiService {
  constructor(private _http: Http) { }

  getAtrapanieblas() {
    return this._http.get(AppConfig.API_PUBLIC + 'atrapaniebla')
      .map(res => res.json());
  }

  // Utilities

  getParameters(data) {
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
  }

  // private helper methods

  public jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        let headers = new Headers({ 'Authorization': 'Token ' + currentUser.token });
        return headers;
    }
  }
}
