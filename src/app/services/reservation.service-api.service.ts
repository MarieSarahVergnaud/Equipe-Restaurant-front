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


  public getAllReservationsToday(): Observable<Reservations> {
    return this.httpClient.get<Reservations>(this.URL+'today/restaurant/4').pipe(
      map((reservationsToday: Reservations | null) => {
        if (reservationsToday == null) {
          return [];
        }

        return reservationsToday;
      }),

      catchError((e) => {
        console.error(e);

        return of([]);
      })
    );
  }

  public getAllReservationsTomorrow(): Observable<Reservations> {
    return this.httpClient.get<Reservations>(this.URL+'tomorrow/restaurant/4').pipe(
      map((reservationsTomorrow: Reservations | null) => {
        if (reservationsTomorrow == null) {
          return [];
        }

        return reservationsTomorrow;
      }),

      catchError((e) => {
        console.error(e);

        return of([]);
      })
    );
  }

  updateReservationStatus(id: number, newStatus: string): Observable<any> {
    return this.httpClient.put(`${this.URL}${id}`, { etat: newStatus }).pipe(
      catchError((e) => {
        console.error(e);
        return of(null);
      })
    );
  }

}
