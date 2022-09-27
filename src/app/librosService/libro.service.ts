import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { timeout } from 'rxjs/operators';
import { consultaLibros , checkout} from './libro.types';

@Injectable({
    providedIn: 'root'
})
export class LibroService
{
    private _consultaLibrosResponse: ReplaySubject<consultaLibros> = new ReplaySubject<consultaLibros>(1);
    private _checkoutResponse: ReplaySubject<checkout> = new ReplaySubject<checkout>(1);

    constructor(private _httpClient: HttpClient)
    {
    }

/*
    aprobarSolicitud( request :aprobarSolicitud ): Observable<masivoPlacaResponse>
    {
       
        return this._httpClient.post<masivoPlacaResponse>('https://proceso-masivo-dot-prod-api-322101.uc.r.appspot.com/aprobar/solicitud', request ).pipe(
            timeout(120000),
            tap((reniec) => {
         
                this._masivoPlacaResponse.next(reniec);
            })
        );
    }
*/
    checkout( client: string ,detail : any ): Observable<checkout>
    {
        
       
        return this._httpClient.post<checkout>('https://apis-prueba.pruebasgt.com/api/order', { client: client , detail:detail } ).pipe(
            timeout(120000),
            tap((detail) => {
         
                this._checkoutResponse.next(detail);
            })
        );
    }

    getLibros(): Observable<consultaLibros>
    {
        
       
        return this._httpClient.get<consultaLibros>('https://apis-prueba.pruebasgt.com/api/products', { } ).pipe(
            timeout(120000),
            tap((data) => {
         
                this._consultaLibrosResponse.next(data);
            })
        );
    }
}
