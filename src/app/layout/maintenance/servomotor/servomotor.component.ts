import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Servomotor } from '../../../model/servomotor';
import { ServomotorService } from '../../../services/servomotor/servomotor.service';

@Component({
    selector: 'app-servomotor',
    templateUrl: './servomotor.component.html',
    styleUrls: ['./servomotor.component.scss'],
    animations: [routerTransition()],
})
export class ServomotorComponent implements OnInit {

    public servomotors:Servomotor[] = [];

    constructor(
        private _servomotorService: ServomotorService
    ) {}

    ngOnInit() {
        this.servomotors = [];
        this._servomotorService.list()
            .subscribe( res => {
                this.servomotors = res.data;
            });
    }

    public refresh() {
        this.ngOnInit();
    }

}
