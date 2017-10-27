import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardAdminComponent implements OnInit {

  public admin = "Admin...";

    constructor() {
    }

    ngOnInit() {
      
    }

}