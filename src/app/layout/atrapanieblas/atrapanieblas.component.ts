import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Atrapaniebla } from '../../model/atrapaniebla';
import { AtrapanieblaService } from '../../services/atrapaniebla/atrapaniebla.service';

import { Dispositivo } from '../../model/dispositivo';
import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
    selector: 'app-atrapanieblas',
    templateUrl: './atrapanieblas.component.html',
    styleUrls: ['./atrapanieblas.component.scss'],
    animations: [routerTransition()],
})
export class AtrapanieblasComponent implements OnInit {

    public atrapanieblas:Atrapaniebla[] = [];
    public dispositivos:Dispositivo[] = [];
    public message:string = "";

    public uap:string = "Universidad Alas Peruanas";

    @ViewChild('swal') private swal: SwalComponent;

    constructor(
    	private _atrapanieblaService: AtrapanieblaService,
        private _dispositivoService: DispositivoService
    ) {}

    ngOnInit() {
        this.getAtrapanieblas();
        this.dispositivos = [];
        this._dispositivoService.list()
            .subscribe( res => {
                this.dispositivos = res.data;
            });
    }

    public getAtrapanieblas() {
        this.atrapanieblas = [];
        this._atrapanieblaService.list()
            .subscribe( res => {
                this.atrapanieblas = res.data;
            });
    }

    public showSwal(message) {
        this.message = message;
        setTimeout(()=> {
            this.swal.show();
        }, 100);
    }

}
