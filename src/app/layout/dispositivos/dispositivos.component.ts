import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Dispositivo } from '../../model/dispositivo';
import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'app-dispositivo',
    templateUrl: './dispositivos.component.html',
    styleUrls: ['./dispositivos.component.scss'],
    animations: [routerTransition()],
})
export class DispositivosComponent implements OnInit {

    public dispositivos:Dispositivo[] = [];

    constructor(
    	private _dispositivoService: DispositivoService
    ) {}

    ngOnInit() {
        this.dispositivos = [];
    	this._dispositivoService.list()
    		.subscribe( res => {
    			this.dispositivos = res.data;
    		});

        this._dispositivoService.listCatacion()
            .subscribe(res => {
                console.log(res);
            })
    }

    public refresh() {
        this.ngOnInit();
    }

}
