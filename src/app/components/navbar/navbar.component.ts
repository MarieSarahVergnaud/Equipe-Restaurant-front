import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuRoute } from './menu-route';
// import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public menuRoutes: IMenuRoute[] = [
    { path: 'home', libelle: 'Home' },
    { path: 'accueil-clientele', libelle: 'Accueil Clientèle' },
    { path: 'reservations', libelle: 'Reservations' },
    { path: 'service-en-salle', libelle: 'Service' },
    { path: 'cuisine', libelle: 'Cuisine' },
    { path: 'caisse', libelle: 'Caisse' },
  ];

  constructor() {} // private loginService: LoginService

  // public logout(): void {
  //   this.loginService.logout();
  // }
}
