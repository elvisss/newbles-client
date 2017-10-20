import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Malla } from '../../model/malla';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MallaService {

    private _malla: Malla;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: Malla): Observable<any> {
        // params.ESTADO_REGISTRO = 'A';
        // params.USUARIO_MODIFICACION = 1;
        // params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.malla.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.malla.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.malla.one(id));
    }

    public update(params: Malla): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.malla.one(params.ID_TIPO_MALLA), params);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.malla.one(id));
    }

}
