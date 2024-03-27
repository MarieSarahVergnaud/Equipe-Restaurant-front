import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservations } from '../entities/reservation';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationAPIService {

  constructor(private httpClient: HttpClient) { }
  URL: string = 'http://localhost:8080/reservations/';


  public getAllReservations(): Observable<Reservations> {
    return this.httpClient.get<Reservations>(this.URL+'restaurant/4').pipe(
      map((reservations: Reservations | null) => {
        if (reservations == null) {
          return [];
        }

        return reservations;
      }),

      catchError((e) => {
        console.error(e);

        return of([]);
      })
    );
  }



}
