import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Malla } from '../../../model/malla';
import { MallaService } from '../../../services/malla/malla.service';

@Component({
    selector: 'app-malla',
    templateUrl: './malla.component.html',
    styleUrls: ['./malla.component.scss'],
    animations: [routerTransition()],
})
export class MallaComponent implements OnInit {

    public mallas:Malla[] = [];

    constructor(
        private _mallaService: MallaService
    ) {}

    ngOnInit() {
        this.mallas = [];
        this._mallaService.list()
            .subscribe( res => {
                this.mallas = res.data;
            });
    }

    public refresh() {
        this.ngOnInit();
    }

}
