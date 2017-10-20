import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Servomotor } from '../../model/servomotor';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ServomotorService {

    private _servomotor: Servomotor;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: Servomotor): Observable<any> {
        // params.ESTADO_REGISTRO = 'A';
        // params.USUARIO_MODIFICACION = 1;
        // params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.servomotor.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.servomotor.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.servomotor.one(id));
    }

    public update(params: Servomotor): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.servomotor.one(params.ID_TIPO_SERVOMOTOR), params);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.servomotor.one(id));
    }

}
