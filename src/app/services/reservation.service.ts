import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private httpClient: HttpClient) { }
  URL: string = 'http://localhost:8080/reservations';
}
