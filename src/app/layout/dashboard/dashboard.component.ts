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

    public markers:marker[] = [];

    constructor(
      private atrapanieblaService: AtrapanieblaService) {
    }

    ngOnInit() {
      this.atrapanieblaService.list()
        .subscribe((res) => {
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].LATITUD = parseFloat(res.data[i].LATITUD);
            res.data[i].LONGITUD = parseFloat(res.data[i].LONGITUD);
          }
          this.markers = res.data;
        })
    }
      zoom: number = 10;
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