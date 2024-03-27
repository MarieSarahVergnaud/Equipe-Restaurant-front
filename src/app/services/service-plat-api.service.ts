import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plats } from '../entities/plat';
import { Observable, map, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicePlatAPIService {
  URL: string = 'http://localhost:8080/plat'
  constructor(private httpClient: HttpClient) { }

  public getAllTables(): Observable<Plats> {
    return this.httpClient.get<Plats>(this.URL).pipe(
      map((plats: Plats | null) => {
        if (plats == null) {
          return [];
        }

        return plats;
      }),

      catchError((e) => {
        console.error(e);

        return of([]);
      })
    );
  }
}

