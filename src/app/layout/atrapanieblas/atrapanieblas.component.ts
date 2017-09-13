import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Atrapaniebla } from '../../model/atrapaniebla';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-atrapanieblas',
    templateUrl: './atrapanieblas.component.html',
    styleUrls: ['./atrapanieblas.component.scss'],
    animations: [routerTransition()],
    providers: [
      ApiService
    ]
})
export class AtrapanieblasComponent implements OnInit {

    constructor(
    	private _api: ApiService
    ) {}

    ngOnInit() {
    	this._api.getAtrapanieblas()
    		.subscribe( res => {
    			console.log(res)
    		});
    }
}
