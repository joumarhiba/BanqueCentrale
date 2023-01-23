import {HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Compte } from '../compte/Compte';
import { AgentService } from './agent.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  displayedColumns: string[] = ['numC', 'type', 'amount', 'enable'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
public comptes: Compte[] = [];

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.getAllProfessionnelsComptes()
  }

  public getAllProfessionnelsComptes() {
    this.agentService.getProfessionnelCompte().subscribe(
      (response: Compte[]) => {
        console.log(response);
        this.comptes = response;
      },
        (error: HttpErrorResponse) => {
          console.log(error.message);

        }
    );
  }


}
