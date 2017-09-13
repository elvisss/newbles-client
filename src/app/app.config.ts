import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {

  constructor() { }

  public static get APIKEY():string {
    return 'AIzaSyBX4D2ABvJBlhKbjCE5vOF2PAr9fjDRp7I';
  };

  public static get API_ENDPOINT():string {
    if (environment.production) {
      return location.protocol + '//innsitec.com/atrapanieblas';
    } else {
      return 'http://localhost:8000/api/';
    }
  };

  public static get API_VERSION():string {
    return ''
  };

  public static get API_PUBLIC():string {
    return this.API_ENDPOINT + this.API_VERSION;
  };

  public static get API_AUTH():string {
    return this.API_PUBLIC + '/validausuario'
  };

}
