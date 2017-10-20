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
<<<<<<< HEAD
      return location.protocol + '//newbles.innsitec.com';
=======
      return 'https://newbles.innsitec.com';
>>>>>>> 16a42f00d4063e8bbc4e5be2cf644853895eb24f
    } else {
      // return 'http://newbles.innsitec.com';
      return 'http://localhost:8000';
      // return 'http://192.168.43.253:8000';
    }
  };

}
