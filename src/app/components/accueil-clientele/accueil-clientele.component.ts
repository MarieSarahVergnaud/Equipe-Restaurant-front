import { Component, NgModule, OnInit } from '@angular/core';
import { AcceuilClienteleAPIService } from '../../services/acceuil-clientele-api.service';
import { Observable } from 'rxjs';
import { Table, Tables } from '../../entities/table';
import { CommonModule } from '@angular/common';

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

  public selectionTable(table: Table):void {
    console.log("table selectionnées " , table);
    // ngbModal
   }

}
