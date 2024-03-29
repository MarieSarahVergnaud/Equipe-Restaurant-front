import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {  Tables } from '../entities/table';



@Injectable({ providedIn: 'root' })
export class AcceuilClienteleAPIService {
  constructor(private httpClient: HttpClient) {}
  URL: string = 'http://localhost:8080/table/'; /* ON AFFICHE LES TABLES DU
  RESTAURANT ID4 CAR POUR LE  PathRestaurant/4 EN DUR CAR PAS ENCORE GESTION*/

  public getAllTables(): Observable<Tables> {
    return this.httpClient.get<Tables>(this.URL+'PathRestaurant/4').pipe(
      map((tables: Tables | null) => {
        if (tables == null) {
          return [];
        }

        return tables;
      }),

      catchError((e) => {
        console.error(e);

        return of([]);
      })
    );
  }

  public updateTableStatus(id: number, newStatus: string): Observable<any> {
    return this.httpClient.put(`${this.URL}${id}`, { etat: newStatus }).pipe(
      catchError((e) => {
        console.error(e);
        return of(null);
      })
    );
  }
}
