import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

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

    // constructor() {

    // }

    ngOnInit() {
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
              lat: -12.069907899999999,
              lng: -76.9366739,
              label: '001',
              draggable: true
          },
          {
              lat: -12.169907899999999,
              lng: -76.5666739,
              label: '002',
              draggable: false
          },
          {
              lat: -12.089907899999999,
              lng: -76.4466739,
              label: '003',
              draggable: true
          }
      ]

}

interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}