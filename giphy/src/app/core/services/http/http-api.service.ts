import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHttpApiResponse } from '@core/models/common.model';
import { environment } from '@environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpApiService {
  constructor(private http: HttpClient) {}

  get<R>(
    baseUrl: string | null,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http
      .get<IHttpApiResponse<R>>(api, options)
      .pipe(map(res => res.data));
  }

  getV2<R>(
    baseUrl: string | null,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http.get<R>(api, options);
  }

  post<R, T>(
    baseUrl: string | null,
    body: T,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http
      .post<IHttpApiResponse<R>>(api, body, options)
      .pipe(map(res => res.data));
  }

  postV2<R, T>(
    baseUrl: string | null,
    body: T,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http.post<R>(api, body, options);
  }

  put<R, T>(
    baseUrl: string | null,
    body: T,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http
      .put<IHttpApiResponse<R>>(api, body, options)
      .pipe(map(res => res.data));
  }

  delete<R>(
    baseUrl: string | null,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http
      .delete<IHttpApiResponse<R>>(api, options)
      .pipe(map(res => res.data));
  }

  patch<R, T>(
    baseUrl: string | null,
    body: T,
    endpoint: string,
    options: Record<string, any> = {}
  ): Observable<R> {
    const api = this.handleParseUrl(baseUrl, endpoint, options);
    return this.http
      .patch<IHttpApiResponse<R>>(api, body, options)
      .pipe(map(res => res.data));
  }

  handleParseUrl(
    baseUrl: string | null,
    endpoint: string,
    options: Record<string, any> = {}
  ): string {
    const keys = Object.keys(options);
    let api = '';
    for (const key of keys) {
      endpoint = endpoint.replace(`{${key}}`, options[key]);
    }
    if (!baseUrl) {
      baseUrl = environment.apis.default.url;
    }
    api = baseUrl + endpoint;
    return api;
  }
}
