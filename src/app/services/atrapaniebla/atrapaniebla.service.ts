import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Atrapaniebla } from '../../model/atrapaniebla';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AtrapanieblaService {

    private _atrapaniebla: Atrapaniebla;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: any = {}): Observable<any> {
        let para = {
          ID_DISPOSITIVO: 1,
          ID_TIPO_TANQUE: 1,
          ID_TIPO_DISENIO: 1,
          ID_TIPO_MALLA: 1,
          ID_ESTADO_ATRAPANIEBLAS: 1,
          OBSERVACION: 'obs',
          ANCHO: params.ANCHO,
          ALTO: params.ALTO,
          LONGITUD: params.LONGITUD,
          LATITUD: params.LATITUD,
          HUMEDAD_PROMEDIO: params.HUMEDAD_PROMEDIO
        }
        return this.apiService
            .post<any>(this.apiService.endpoints.atrapaniebla.todo(), para);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.atrapaniebla.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.atrapaniebla.one(id));
    }

    public update(atrapaniebla: Atrapaniebla): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.atrapaniebla.one(atrapaniebla.ID_ATRAPANIEBLAS), atrapaniebla);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.atrapaniebla.one(id));
    }

    public googlemap(): Observable<any> {
      return this.apiService
        .get<any>(this.apiService.endpoints.atrapaniebla.googlemap());
    }

}
