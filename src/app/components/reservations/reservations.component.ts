import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Reservation, Reservations } from '../../entities/reservation';
import { ReservationAPIService } from '../../services/reservation.service-api.service';
import { FormReservationComponent } from '../form-reservation/form-reservation.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormReservationComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
})
@Injectable({ providedIn: 'root' })
export class ReservationsComponent implements OnInit {
  public reservationToday$?: Observable<Reservations>;
  public reservationTomorrow$?: Observable<Reservations>;

  constructor(
    public reservationAPIService: ReservationAPIService,
    public NgbModal: NgbModal
  ) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.reservationToday$ =
      this.reservationAPIService.getAllReservationsToday();
    this.reservationTomorrow$ =
      this.reservationAPIService.getAllReservationsTomorrow();
  }

  accepterReservation(reservation: Reservation): void {
    const newStatus = (reservation.etat = 'ACCEPTEE');
    this.reservationAPIService
      .updateReservationStatus(reservation.id, newStatus)
      .subscribe(() => {
        this.reservationToday$ =
          this.reservationAPIService.getAllReservationsToday();
        this.reservationTomorrow$ =
          this.reservationAPIService.getAllReservationsTomorrow();
      });
  }

  refuserReservation(reservation: Reservation) {
    const newStatus = (reservation.etat = 'REFUSEE');
    this.reservationAPIService
      .updateReservationStatus(reservation.id, newStatus)
      .subscribe(() => {
        this.reservationToday$ =
          this.reservationAPIService.getAllReservationsToday();
        this.reservationTomorrow$ =
          this.reservationAPIService.getAllReservationsTomorrow();
      });
  }

  public modalOptions = {
    centered: true,
    animation: true,
  };

  afficherFormulaireReservation() {
    const modalRef: NgbModalRef = this.NgbModal.open(
      FormReservationComponent,
      this.modalOptions
    );
    const component: FormReservationComponent = modalRef.componentInstance;
  }
}
