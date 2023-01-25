import {HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Compte } from '../compte/Compte';
import { AgentService } from './agent.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogProfessionnelComponent } from '../client/dialog-professionnel/dialog-professionnel.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  displayedColumns: string[] = ['numC', 'type', 'amount', 'enable', 'option'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public comptes: Compte[] = [];
  public compte! : Compte;
  public compteDetails! : Compte;

  constructor(private agentService: AgentService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProfessionnelsComptes()
  }

  public getAllProfessionnelsComptes() {
    this.agentService.getProfessionnelCompte().subscribe(
      (response: Compte[]) => {
        this.comptes = response;
      },
        (error: HttpErrorResponse) => {
          console.log(error.message);

        }
    );

    this.agentService.getStrandardCompte().subscribe(
      (standards : any) => {
        for(var i = 0; i < standards.length ; i++){
          this.comptes.push(standards[i]);
      }
        this.dataSource =new MatTableDataSource(this.comptes)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )


  }

public enableCompte(compte: Compte){
  if(compte.type == 'Standard') {
  this.agentService.enableStandardCompte(compte).subscribe(
    (standard: Compte) => {
      this.compte = standard;
      window.location.reload();
    },

  (error: HttpErrorResponse) => {
    console.log(error.message);
  }
)
}
else if(compte.type == 'Professionnel') {
  this.agentService.enableProfessionnelCompte(compte).subscribe(
    (professionnel: Compte) => {
      this.compte = professionnel;
      window.location.reload();
    },

  (error: HttpErrorResponse) => {
    console.log(error.message);
  }
)
}
else {
  console.log("error in type of account");

}
}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  compteInfos(compte: Compte){
    this.compteDetails = compte
    this.dialog.open(DialogProfessionnelComponent, {
      width:'30%',
    });
    console.log(this.compteDetails.id);

  }

 
}
