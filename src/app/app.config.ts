import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {

  constructor() { }

  public APIKEY():string {
    return 'AIzaSyBX4D2ABvJBlhKbjCE5vOF2PAr9fjDRp7I';
  };

  public API_ENDPOINT():string {
    if (environment.production) {
      return location.protocol + '//newbles.innsitec.com';
    } else {
      // return 'http://newbles.innsitec.com';
      return 'http://localhost:8000';
      // return 'http://192.168.43.253:8000';
    }
  };

}
