import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Disenio } from '../../../model/disenio';
import { DisenioService } from '../../../services/disenio/disenio.service';

@Component({
    selector: 'app-disenio',
    templateUrl: './disenio.component.html',
    styleUrls: ['./disenio.component.scss'],
    animations: [routerTransition()],
})
export class DisenioComponent implements OnInit {

    public disenios:Disenio[] = [];

    constructor(
        private _disenioService: DisenioService
    ) {}

    ngOnInit() {
        this.disenios = [];
        this._disenioService.list()
            .subscribe( res => {
                this.disenios = res.data;
            });
    }

    public refresh() {
        this.ngOnInit();
    }

}
