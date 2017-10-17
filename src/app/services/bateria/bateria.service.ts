import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Bateria } from '../../model/bateria';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class BateriaService {

    private _bateria: Bateria;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: Bateria): Observable<any> {
        params.ESTADO_REGISTRO = 'A';
        params.USUARIO_MODIFICACION = 1;
        params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.bateria.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.bateria.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.bateria.one(id));
    }

    public update(params: Bateria): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.bateria.one(params.ID_TIPO_BATERIA), params);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.bateria.one(id));
    }

}
