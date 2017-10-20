import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { Dispositivo } from '../../model/dispositivo';
import { DispositivoService } from '../../services/dispositivo/dispositivo.service';

@Component({
    selector: 'app-stasts',
    templateUrl: './estadistica.component.html',
    styleUrls: ['./estadistica.component.scss'],
    animations: [routerTransition()],
})
export class EstadisticaComponent implements OnInit {

    model;

    constructor(
        private _dispositivoService: DispositivoService
    ) {}

    ngOnInit() {
        this.dispositivos = [];
        this._dispositivoService.list()
            .subscribe( res => {
                this.dispositivos = res.data;
                this.selectDispositivo(this.dispositivos[0].ID_DISPOSITIVO);
            });
    }

    public dispositivos:Dispositivo[] = [];

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true,
        scaleStartValue: 0
    };
    public barChartLabels:string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
 
    public barChartData:any[] = [
        {data: [4, 2, 4, 0, 1, 9], label: 'Dispositivo 1'}
    ];
 
    // events
    public chartClicked(e:any):void {
        console.log(e);
    }
 
    public chartHovered(e:any):void {
        console.log(e);
    }

    public selectedID:number;

    public selectDispositivo(id) {
        let clone = [{data:[], label:''}];
        this._dispositivoService.listCatacion(id)
            .subscribe( res => {
                clone[0].data = res.cantidad.split(',');
                clone[0].label = 'Dispositivo ' + id;
                this.barChartData = clone;
            })
    }
 
    public randomize(id):void {
        this.selectedID = id;
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 10),
            2,
            4,
            (Math.random() * 10),
            4,
            (Math.random() * 10),
            3];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        clone[0].label = 'Dispositivo ' + id;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

}
