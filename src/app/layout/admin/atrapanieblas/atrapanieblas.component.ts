import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Atrapaniebla } from '../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../services/atrapaniebla/atrapaniebla.service';

@Component({
    selector: 'app-atrapanieblas',
    templateUrl: './atrapanieblas.component.html',
    styleUrls: ['./atrapanieblas.component.scss'],
    animations: [routerTransition()],
})
export class AtrapanieblasComponent implements OnInit {

    public atrapanieblas:Atrapaniebla[] = [];

    constructor(
    	private _atrapanieblaService: AtrapanieblaService
    ) {}

    ngOnInit() {
        this.atrapanieblas = [];
    	this._atrapanieblaService.listPending()
    		.subscribe( res => {
    			this.atrapanieblas = res.data;
    		});
    }

    public refresh() {
        this.ngOnInit();
    }

}
