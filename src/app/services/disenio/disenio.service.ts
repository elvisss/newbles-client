import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Disenio } from '../../model/disenio';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class DisenioService {

    private _disenio: Disenio;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: Disenio): Observable<any> {
        // params.ESTADO_REGISTRO = 'A';
        // params.USUARIO_MODIFICACION = 1;
        // params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.disenio.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.disenio.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.disenio.one(id));
    }

    public update(params: Disenio): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.disenio.one(params.ID_TIPO_DISENIO), params);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.disenio.one(id));
    }

}
