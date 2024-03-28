import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reservation } from '../../entities/reservation';
import { ReservationAPIService } from '../../services/reservation.service-api.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../entities/restaurant';

@Component({
  selector: 'app-form-reservation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-reservation.component.html',
  styleUrl: './form-reservation.component.scss',
})
export class FormReservationComponent {
  public date: string;
  public time: string;
  public numberOfPeople: number;
  public peopleNumbers: number[] = [];

  public reservation$?: Observable<Reservation>;
  public restaurantId?: number;



  constructor(
    public ngbActiveModal: NgbActiveModal,
    public reservationAPIService: ReservationAPIService
  ) {
    const currentDate = new Date();
    const oneHourLater = new Date(currentDate.getTime() + 60 * 60 * 1000);

    this.date = currentDate.toISOString().split('T')[0];
    this.time = oneHourLater.toISOString().split('T')[1].substring(0, 5);
    this.numberOfPeople = 1;

    this.peopleNumbers = Array.from({ length: 20 }, (_, i) => i + 1);
  }

  onSubmit() {
    // Creation d'une nouvelle instance de Reservation
    // avec les données du formulaire

    const newReservation: Reservation = {
      id : -1,
      date: this.date,
      heure: this.time,
      nbrPlace: this.numberOfPeople,
      etat: 'EN ATTENTE',
      restaurant: {id: 4},
      client:  null,
      tables: null,
    };

    this.createReservation(newReservation);
  }

  private createReservation(reservation: Reservation) {
    this.reservationAPIService.createReservation(reservation).subscribe({
      next: (createdReservation) => {
        console.log('Reservation créée avec succès:', createdReservation);
      },
      error: (error) => {
        console.error('Erreur lors de la création de la réservation:', error);
      },
    });
  }
}
