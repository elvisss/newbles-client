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
      zoom: number = 8;
      
      // initial center position for the map
      lat: number = 51.673858;
      lng: number = 7.815982;
      
      clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`)
      }
      
      mapClicked($event: any) {
        this.markers.push({
          lat: $event.coords.lat,
          lng: $event.coords.lng,
          label: 'D',
          draggable: true
        });
      }
      
      markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
      }
      
      markers: marker[] = [
          {
              lat: 51.673858,
              lng: 7.815982,
              label: 'A',
              draggable: true
          },
          {
              lat: 51.373858,
              lng: 7.215982,
              label: 'B',
              draggable: false
          },
          {
              lat: 51.723858,
              lng: 7.895982,
              label: 'C',
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