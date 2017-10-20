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

    // public markers:marker[] = [];

    constructor(
      private atrapanieblaService: AtrapanieblaService) {
    }

    ngOnInit() {
      // this.atrapanieblaService.googlemap()
      //   .subscribe((res) => {
      //     this.markers = res.data;
      //   })
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
        // this.markers.push({
        //   lat: $event.coords.lat,
        //   lng: $event.coords.lng,
        //   label: 'D',
        //   draggable: true
        // });
      }
      
      markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
      }
      
      markers: marker[] = [
          {
              LATITUD: -12.069907899999999,
              LONGITUD: -76.9366739,
              ID_ATRAPANIEBLAS: '001',
              draggable: true
          },
          {
              LATITUD: -12.169907899999999,
              LONGITUD: -76.5666739,
              ID_ATRAPANIEBLAS: '002',
              draggable: false
          },
          {
              LATITUD: -12.089907899999999,
              LONGITUD: -76.4466739,
              ID_ATRAPANIEBLAS: '003',
              draggable: true
          }
      ]

}

interface marker {
    ID_ATRAPANIEBLAS: string;
    LATITUD: number;
    LONGITUD: number;
    draggable: boolean;
}