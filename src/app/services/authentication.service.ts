import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppConfig } from "../app.config";
import { ApiService } from "./api/api.service";
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    private apiService: ApiService,
    private _config: AppConfig
  ) { }

  login(model: User): Promise<string> {

    if (model.user == 'admin') {
      localStorage.setItem('currentUser', 'admin');
    } else {
      localStorage.setItem('currentUser', 'user');
    }

    return Promise.resolve(localStorage.getItem('currentUser'));
  }

  // logout() {
  //   return this.http.get(AppConfig.API_CALL_CENTER + 'session/close/', { headers: this._api.jwt() }).map((response: Response) => response.json());
  // }
}
