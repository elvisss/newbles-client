import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AtrapanieblaService } from '../../services/atrapaniebla/atrapaniebla.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    // public alerts: Array<any> = [];
    // public sliders: Array<any> = [];

    // public title: string = 'My first AGM project';
    // public lat: number = -12.078342;
    // public lng: number = -76.922988;

    public markers:marker[] = [];

    constructor(
      private atrapanieblaService: AtrapanieblaService) {
    }

    ngOnInit() {
      this.atrapanieblaService.googlemap()
        .subscribe((res) => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].LATITUD = parseFloat(res.data[i].LATITUD);
            res.data[i].LONGITUD = parseFloat(res.data[i].LONGITUD);
          }
          this.markers = res.data;
        })
    }

    // public closeAlert(alert: any) {
    //     const index: number = this.alerts.indexOf(alert);
    //     this.alerts.splice(index, 1);
    // }

    // google maps zoom level
      zoom: number = 10;
      
      // initial center position for the map
      lat: number = -12.069907899999999;
      lng: number = -76.9366739;
      
      clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
      }
      
      mapClicked($event: any) {
      }
      
      markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
      }

}

interface marker {
    ID_ATRAPANIEBLAS: string;
    LATITUD: string;
    LONGITUD: string;
}