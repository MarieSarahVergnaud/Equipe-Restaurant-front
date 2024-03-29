import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Plat, Plats } from '../../entities/plat';
import { Table } from '../../entities/table';
import { ServiceEnSalleAPIService } from '../../services/service-en-salle-api.service';
import { ServicePlatAPIService } from './../../services/service-plat-api.service';

@Component({
  selector: 'app-commande-par-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commande-par-table.component.html',
  styleUrl: './commande-par-table.component.scss',
})
export class CommandeParTableComponent implements OnInit {
  public tables$?: Observable<Table>;
  public plats$?: Observable<Plats>;
  public platsSelectionnes!: Plats;

  constructor(
    public serviceEnSalleAPIService: ServiceEnSalleAPIService,
    private route: ActivatedRoute,
    public servicePlatAPIService: ServicePlatAPIService
  ) {}

  ngOnInit(): void {
    this.platsSelectionnes = [];
    const tableId = this.route.snapshot.params['id'];
    this.tables$ = this.serviceEnSalleAPIService.getTableById(tableId);
    this.plats$ = this.servicePlatAPIService.getAllTables();
    console.log(' test', this.tables$);
  }

  ajouterPlatACommande(plat: Plat | null): void {
    if (plat) {
      this.platsSelectionnes.push(plat);
    }
  }
  supprimerPlatDeCommande(plat: Plat): void {
    const index = this.platsSelectionnes.indexOf(plat);
    if (index !== -1) {
      this.platsSelectionnes.splice(index, 1);
    }
  }
}
