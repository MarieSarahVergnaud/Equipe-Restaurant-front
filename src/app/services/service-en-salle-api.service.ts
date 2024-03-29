import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tables ,Table} from '../entities/table';
import { Observable, map ,catchError,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceEnSalleAPIService {
  URL: string = 'http://localhost:8080/table';

  constructor(private httpClient: HttpClient) { }
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
  public getTableById(id: number): Observable<Table> {
    const tableUrl = `${this.URL}/${id}`;
    return this.httpClient.get<Table>(tableUrl).pipe(
      catchError((error) => {
        console.error(error);
        throw 'La table demandée est introuvable.';
      })
    );
  }

  
}
