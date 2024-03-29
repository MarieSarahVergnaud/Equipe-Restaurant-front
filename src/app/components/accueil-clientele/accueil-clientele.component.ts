import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table, Tables } from '../../entities/table';
import { AcceuilClienteleAPIService } from '../../services/acceuil-clientele-api.service';

@Component({
  selector: 'app-accueil-clientele',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accueil-clientele.component.html',
  styleUrl: './accueil-clientele.component.scss',
})
export class AccueilClienteleComponent implements OnInit {
  public tables$?: Observable<Tables>;

  constructor(public acceuilClienteleAPIService: AcceuilClienteleAPIService) {}

  ngOnInit(): void {
    console.log('On init');
    this.tables$ = this.acceuilClienteleAPIService.getAllTables();
  }

  passerTableLibrePresent(table: Table): void {
    const newStatus = table.etat === 'LIBRE' ? 'PRESENT' : 'LIBRE';
    this.acceuilClienteleAPIService
      .updateTableStatus(table.id, newStatus)
      .subscribe(() => {
        this.tables$ = this.acceuilClienteleAPIService.getAllTables();
      });
  }

  passerTableReserveePresent(table: Table): void {
    const newStatus = table.etat === 'RESERVEE' ? 'PRESENT' : 'RESERVEE';
    this.acceuilClienteleAPIService
      .updateTableStatus(table.id, newStatus)
      .subscribe(() => {
        this.tables$ = this.acceuilClienteleAPIService.getAllTables();
      });
  }
}
