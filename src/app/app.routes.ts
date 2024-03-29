import { Routes } from '@angular/router';
import { AccueilClienteleComponent } from './components/accueil-clientele/accueil-clientele.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { CommandeParTableComponent } from './components/commande-par-table/commande-par-table.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ServiceEnSalleComponent } from './components/service-en-salle/service-en-salle.component';

import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accueil-clientele', component: AccueilClienteleComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'service-en-salle', component: ServiceEnSalleComponent },
  { path: 'cuisine', component: CuisineComponent },
  { path: 'caisse', component: CaisseComponent },
  { path: 'commande/:id', component: CommandeParTableComponent },
  { path: 'form-reservation', component: FormReservationComponent },
];
