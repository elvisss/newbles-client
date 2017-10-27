import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { User } from '../model/user';

import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    public model: User = <User>{};

    constructor(
        public _router: Router,
        private _authenticationService: AuthenticationService
    ) {}

    ngOnInit() {
    }

    onLoggedin() {
        this._authenticationService.login(this.model)
            .then (
                res => {
                  switch(res) {
                     case "admin": {
                        this._router.navigate(['/admin/dashboard']);
                        break;
                     }
                     case "user": {
                        this._router.navigate(['/dashboard']);
                        break;
                     }
                     default: {
                        console.log('...')
                        break;
                     }
                  }
                }, error => {
                    console.log(error)
                }
            )
    }

}
