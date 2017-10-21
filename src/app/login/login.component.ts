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
            .subscribe (
                res => {
                    this._router.navigate(['/dashboard']);
                }, error => {
                    localStorage.setItem('isLoggedin', 'true');
                    this._router.navigate(['/dashboard']);
                }
            )
    }

}
