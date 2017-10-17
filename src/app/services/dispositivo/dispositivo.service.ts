import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Dispositivo } from '../../model/dispositivo';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DispositivoService {

    private _dispositivo: Dispositivo;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: any = {}): Observable<any> {
        let para = {
          ID_TIPO_SERVOMOTOR:1,
          ID_TIPO_BATERIA:1,
          DESCRIPCION:'desc',
          NUMERO_PLACA:'123',
          VIDA_UTIL_MINIMA:1,
          VIDA_UTIL_MAXIMA:2,
          USUARIO_CREACION:1,
        }
        params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.dispositivo.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.dispositivo.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.dispositivo.one(id));
    }

    public update(id): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.dispositivo.one(id));
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.dispositivo.one(id));
    }

    public listCatacion(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.dispositivo.catacion());
    }

}
