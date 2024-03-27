import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationAPIService } from '../../services/reservation.service-api.service';
import { Reservations } from '../../entities/reservation';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
@Injectable({ providedIn: 'root' })

export class ReservationsComponent implements OnInit{

  public reservationToday$?: Observable<Reservations>;
  public reservationTomorrow$?: Observable<Reservations>;


  constructor(public reservationAPIService: ReservationAPIService) {}

  ngOnInit(): void{
    console.log("OnInit");
    this.reservationToday$ = this.reservationAPIService.getAllReservationsToday();
    this.reservationTomorrow$ = this.reservationAPIService.getAllReservationsTomorrow();
  }





}
