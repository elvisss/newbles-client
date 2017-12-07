import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { User } from '../model/user';

import { AuthenticationService } from '../services/authentication.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    @ViewChild('login') private login: SwalComponent;
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

                  switch(this.model.user) {
                     case "admin": {
                       localStorage.setItem('currentUser', 'admin');
                        this._router.navigate(['/admin/dashboard']);
                        break;
                     }
                     case "user": {
                       localStorage.setItem('currentUser', 'user');
                        this._router.navigate(['/dashboard']);
                        break;
                     }
                     default: {
                        console.log('...')
                        break;
                     }
                  }
                }, error => {
                    this.login.show();
                }
            )
    }

}
