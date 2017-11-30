import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Dispositivo } from '../../model/dispositivo';
import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

import { Servomotor } from '../../model/servomotor';
import { ServomotorService } from '../../services/servomotor/servomotor.service';

import { Bateria } from '../../model/bateria';
import { BateriaService } from '../../services/bateria/bateria.service';

@Component({
    selector: 'app-dispositivo',
    templateUrl: './dispositivos.component.html',
    styleUrls: ['./dispositivos.component.scss'],
    animations: [routerTransition()],
})
export class DispositivosComponent implements OnInit {

    public dispositivos:Dispositivo[] = [];
    public servomotors:Servomotor[] = [];
    public baterias:Bateria[] = [];

    constructor(
    	private _dispositivoService: DispositivoService,
        private _servomotorService: ServomotorService,
        private _bateriaService: BateriaService
    ) {}

    ngOnInit() {
        this.getDispositivos();
        this.servomotors = [];
        this._servomotorService.list()
            .subscribe( res => {
                this.servomotors = res.data;
            });
        this.baterias = [];
        this._bateriaService.list()
            .subscribe( res => {
                this.baterias = res.data;
            });
    }

    public getDispositivos() {
        this.dispositivos = [];
        this._dispositivoService.list()
            .subscribe( res => {
                this.dispositivos = res.data;
            });
    }

    public refresh() {
        this.getDispositivos();
    }

}
