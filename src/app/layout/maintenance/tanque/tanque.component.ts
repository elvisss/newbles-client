import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Tanque } from '../../../model/tanque';
import { TanqueService } from '../../../services/tanque/tanque.service';

@Component({
    selector: 'app-tanque',
    templateUrl: './tanque.component.html',
    styleUrls: ['./tanque.component.scss'],
    animations: [routerTransition()],
})
export class TanqueComponent implements OnInit {

    public tanques:Tanque[] = [];

    constructor(
        private _tanqueService: TanqueService
    ) {}

    ngOnInit() {
        this.tanques = [];
        this._tanqueService.list()
            .subscribe( res => {
                this.tanques = res.data;
            });
    }

    public refresh() {
        this.ngOnInit();
    }

}
