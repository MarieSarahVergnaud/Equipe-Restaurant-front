import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import {  Tables } from '../entities/table';

@Injectable({ providedIn: 'root' })
export class AcceuilClienteleAPIService {
  constructor(private httpClient: HttpClient) {}
  URL: string = 'http://localhost:8080/table';

  public getAllTables(): Observable<Tables> {
    return this.httpClient.get<Tables>(this.URL).pipe(
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
    return this.httpClient.put(`${this.URL}/${id}`, { etat: newStatus }).pipe(
      catchError((e) => {
        console.error(e);
        return of(null);
      })
    );
  }
}
