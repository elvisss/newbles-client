import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppConfig } from '../../app.config';

import { endpoints } from './api';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/debounceTime';

import { Observable } from 'rxjs/Observable';

interface ApiConfig {
    apiResponse: boolean;
}

@Injectable()
export class ApiService {
    private headers: Headers;
    private host: string;
    private apiPrefix: string;
    // private apiVersion: string;
    private debounceTimeRequest: number;
    private retries: number;
    public endpoints = endpoints;

    constructor(
        private http: Http,
        private config: AppConfig) {
        this.headers = new Headers();
        this.host = this.config.API_ENDPOINT();
        this.apiPrefix = 'api';
        // this.apiVersion = '1';
        this.debounceTimeRequest = 1000;
        this.retries = 2;
    }

    private createUrl(url: string): string {
        return `${this.host}/${this.apiPrefix}${url}`;
    }

    private mapResponse(response: Response) {
        return response.json();
    }

    public registerHeader_() {
        this.headers.delete('X-TOKEN');
        this.headers.append('X-TOKEN', 'n7e4mdm5gpJLrT52RWqX+bgXw80');
    }

    private handlerError(errorInfo: any): Observable<any> {
        let error: { errors?: any; response?: any; } = {
            errors: []
        };

        try {
            error = errorInfo.json();
        } catch (e) {
            error.errors = [errorInfo.statusText];
        }
        return Observable.throw(error.response || 'Server error');
    }

    public registerHeader(header: string, value: string): void {
        this.headers.delete(header);
        this.headers.append(header, value);
    }

    public get<ResponseInterface>(url: string, headers_?: Headers): Observable<ResponseInterface> {
        let headers: Headers;
        if (!!headers_) {
            headers = headers_;
        } else {
            headers = this.headers;
        }
        return this.http
            .get(this.createUrl(url), { headers })
            .debounceTime(this.debounceTimeRequest)
            .retry(this.retries)
            .map((response) => this.mapResponse(response))
            .catch((error: Error) => this.handlerError(error));
    }

    public post<ResponseInterface>(url: string, data: any = {}, config?: any): Observable<ResponseInterface> {
        if (config) {
            for (const header in config.headers) {
                this.registerHeader(header, config.headers[header]);
            }
        }
        this.registerHeader_();
        const headers = this.headers;
        return this.http
            .post(this.createUrl(url), data, { headers })
            .debounceTime(this.debounceTimeRequest)
            .map((response) => this.mapResponse(response))
            .catch((error: Error) => this.handlerError(error));
    }

    public delete(url: string): Observable<any> {
        const headers = this.headers;
        return this.http
            .delete(this.createUrl(url), { headers })
            .debounceTime(this.debounceTimeRequest)
            .catch((error: Error) => this.handlerError(error));
    }

    public put<ResponseInterface>(url: string, data: any = {}): Observable<ResponseInterface> {
        const headers = this.headers;
        return this.http
            .put(this.createUrl(url), data, { headers })
            .debounceTime(this.debounceTimeRequest)
            .map((response) => this.mapResponse(response))
            .catch((error: Error) => this.handlerError(error));
    }
}
