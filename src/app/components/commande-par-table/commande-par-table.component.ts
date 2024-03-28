import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {  Table } from '../../entities/table';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { ServiceEnSalleAPIService } from '../../services/service-en-salle-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commande-par-table',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './commande-par-table.component.html',
  styleUrl: './commande-par-table.component.scss'
})
export class CommandeParTableComponent  implements OnInit {
  
  public tables$?: Observable<Table>;

  constructor(public serviceEnSalleAPIService: ServiceEnSalleAPIService,
    private route: ActivatedRoute,){}

  ngOnInit(): void {
    this.tables$ = this.serviceEnSalleAPIService.getTableById(21);
    console.log(" test",this.tables$);
    
  }
  

}
