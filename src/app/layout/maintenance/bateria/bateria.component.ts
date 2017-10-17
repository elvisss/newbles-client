import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Bateria } from '../../../model/bateria';
import { BateriaService } from '../../../services/bateria/bateria.service';

@Component({
    selector: 'app-baterias',
    templateUrl: './bateria.component.html',
    styleUrls: ['./bateria.component.scss'],
    animations: [routerTransition()],
})
export class BateriaComponent implements OnInit {

    public baterias:Bateria[] = [];

    constructor(
        private _bateriaService: BateriaService
    ) {}

    ngOnInit() {
        this.baterias = [];
        this._bateriaService.list()
            .subscribe( res => {
                this.baterias = res.data;
            });
    }

    public refresh() {
        this.ngOnInit();
    }

}
