import { CommonModule } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationAPIService } from '../../services/reservation.service-api.service';
import { Reservation, Reservations } from '../../entities/reservation';
import { FormReservationComponent } from '../form-reservation/form-reservation.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public reservationAPIService: ReservationAPIService, public NgbModal: NgbModal) {}

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

  /* createReservation(reservation: Reservation) {
    this.reservationAPIService.createReservation(reservation).subscribe({
      next: (createdReservation) => {
        console.log('Reservation créée avec succès:', createdReservation);
      },
      error: (error) => {
        console.error('Erreur lors de la création de la réservation:', error);
      }
    });
  } */

  public modalOptions =  {
    centered: true,
    animation: true
  }

  afficherFormulaireReservation() {

    const modalRef: NgbModalRef = this.NgbModal.open(FormReservationComponent, this.modalOptions);


    const component: FormReservationComponent = modalRef.componentInstance;
    /* component.reservation = reservation; */

  }

}
