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

  login(model: User) {
    return this.apiService
        .post<any>(this.apiService.endpoints.auth.login(), model)
          .map((response: Response) => {
            localStorage.setItem('isLoggedin', 'true');
          });
  }

  // logout() {
  //   return this.http.get(AppConfig.API_CALL_CENTER + 'session/close/', { headers: this._api.jwt() }).map((response: Response) => response.json());
  // }
}
