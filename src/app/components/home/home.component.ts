import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-route';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public menuRoutes: IMenuRoute[] = [
    { path: '/accueil-clientele', libelle: 'Accueil Clientèle' },
    { path: '/reservations', libelle: 'Reservations' },
    { path: '/service-en-salle', libelle: 'Service' },
    { path: '/cuisine', libelle: 'Cuisine' },
    { path: '/caisse', libelle: 'Caisse' },
  ];
}
