import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tables } from '../../entities/table';
import { ServiceEnSalleAPIService } from '../../services/service-en-salle-api.service';

@Component({
  selector: 'app-service-en-salle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-en-salle.component.html',
  styleUrl: './service-en-salle.component.scss',
})
export class ServiceEnSalleComponent implements OnInit {
  public tables$?: Observable<Tables>;

  constructor(
    public serviceEnSalleAPIService: ServiceEnSalleAPIService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tables$ = this.serviceEnSalleAPIService.getAllTables();
  }

  onViewTable(tableId: number): void {
    this.router.navigateByUrl(`commande/${tableId}`);
  }
}
