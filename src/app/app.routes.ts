import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccueilClienteleComponent } from './components/accueil-clientele/accueil-clientele.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ServiceEnSalleComponent } from './components/service-en-salle/service-en-salle.component';
import { CuisineComponent } from './components/cuisine/cuisine.component';
import { CaisseComponent } from './components/caisse/caisse.component';
import { CommandeParTableComponent } from './components/commande-par-table/commande-par-table.component';

import { FormReservationComponent } from './components/form-reservation/form-reservation.component';
// import { NewStructuralDirectivesComponent } from './components/new-structural-directives/new-structural-directives.component';
// import { inject } from '@angular/core';
// import { StorageService } from './services/storage.service';
// import { LoginService } from './services/login.service';
// import { SubjectDemoComponent } from './components/subject-demo/subject-demo.component';

// const canActivatePokemon: CanActivateFn =
//     (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
//         // inject() est une fonction statique pour permettre de s'injecter un service
//         const storageService: StorageService = inject(StorageService);
//         return storageService.get("pokemon") == "true";
//     }

// const isAuthenticated: CanActivateFn = () => {
//     return inject(LoginService).isAuthenticated();
// }

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'accueil-clientele', component: AccueilClienteleComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'service-en-salle', component: ServiceEnSalleComponent },
  { path: 'cuisine', component: CuisineComponent },
  { path: 'caisse', component: CaisseComponent },

  { path: 'commande/:id', component: CommandeParTableComponent },
  

  { path: 'form-reservation', component: FormReservationComponent},



  // {
  //     path: '**',
  //     loadComponent: () => import('./components/login-form/login-form.component').then((f => f.LoginFormComponent))
  // }
];
