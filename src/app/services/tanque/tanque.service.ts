import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { Tanque } from '../../model/tanque';
import { ApiService } from '../api/api.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class TanqueService {

    private _tarque: Tanque;
        
    constructor(private apiService: ApiService) {
        
    }

    public create(params: Tanque): Observable<any> {
        // params.ESTADO_REGISTRO = 'A';
        // params.USUARIO_MODIFICACION = 1;
        // params.USUARIO_CREACION = 1;
        return this.apiService
            .post<any>(this.apiService.endpoints.tanque.todo(), params);
    }

    public list(): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.tanque.todo());
    }

    public get(id): Observable<any> {
        return this.apiService
            .get<any>(this.apiService.endpoints.tanque.one(id));
    }

    public update(params: Tanque): Observable<any> {
        return this.apiService
            .put<any>(this.apiService.endpoints.tanque.one(params.ID_TIPO_TANQUE), params);
    }

    public delete(id): Observable<any> {
        return this.apiService
            .delete(this.apiService.endpoints.tanque.one(id));
    }

}
