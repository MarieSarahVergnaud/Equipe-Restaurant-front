import { Table } from './../../entities/table';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Tables} from '../../entities/table';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ServiceEnSalleAPIService } from '../../services/service-en-salle-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-en-salle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-en-salle.component.html',
  styleUrl: './service-en-salle.component.scss'
})
export class ServiceEnSalleComponent  implements OnInit {

  public tables$?: Observable<Tables>;

  constructor(public serviceEnSalleAPIService: ServiceEnSalleAPIService,
    private router:Router){}

  ngOnInit(): void {
    this.tables$ = this.serviceEnSalleAPIService.getAllTables();
  }

  onViewTable(tableId: number): void{

    this.router.navigateByUrl(`commande/${tableId}`)
  }

}
