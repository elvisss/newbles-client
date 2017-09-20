import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AppConfig } from "../app.config";
import { ApiService } from "./api/api.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  constructor(
    private http: Http,
    private _api: ApiService,
    private _config: AppConfig
  ) { }

  login() {
    return this.http.get(this._config.API_ENDPOINT())
      .map((response: Response) => {
        localStorage.setItem('isLoggedin', 'true');
        return;
      });
  }

  // logout() {
  //   return this.http.get(AppConfig.API_CALL_CENTER + 'session/close/', { headers: this._api.jwt() }).map((response: Response) => response.json());
  // }
}
