import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Atrapaniebla, estadoAtrapaniebla } from '../../../model/atrapaniebla';
import { AtrapanieblaService } from '../../../services/atrapaniebla/atrapaniebla.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
    selector: 'app-atrapanieblas',
    templateUrl: './atrapanieblas.component.html',
    styleUrls: ['./atrapanieblas.component.scss'],
    animations: [routerTransition()],
})
export class AtrapanieblasComponent implements OnInit {

    public atrapanieblas:Atrapaniebla[] = [];
    public atrapaniebla: Atrapaniebla = <Atrapaniebla>{};
    public atrapanieblaEdit: Atrapaniebla = <Atrapaniebla>{};

    @ViewChild('swalApprove') private swalApprove: SwalComponent;
    @ViewChild('swalConfirmation') private swalConfirmation: SwalComponent;

    constructor(
    	private _atrapanieblaService: AtrapanieblaService
    ) {}

    ngOnInit() {
        this.atrapanieblas = [];
    	this._atrapanieblaService.getPending()
    		.subscribe( res => {
    			this.atrapanieblas = res.data;
    		});
    }

    public tryApprove(atrapaniebla) {
        this.atrapanieblaEdit = Object.assign({}, atrapaniebla);
        this.atrapanieblaEdit.ID_ESTADO_ATRAPANIEBLAS = estadoAtrapaniebla.approve;
        this.swalApprove.show();
    }

    public approve() {
        this._atrapanieblaService.update(this.atrapanieblaEdit)
          .subscribe(
            response => {
                this.atrapaniebla = Object.assign({}, this.atrapanieblaEdit);
                this.swalConfirmation.show();
            }, error => {

            }, () => {

            })
    }

    public refresh() {
        this.ngOnInit();
    }

}
