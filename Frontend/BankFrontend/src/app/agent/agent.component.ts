import {HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AgentService } from './agent.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from '../compte/Compte';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  addAmountForm !: FormGroup

  displayedColumns: string[] = ['numC', 'type', 'amount', 'enable', 'option'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public comptes: Compte[] = [];
  public compte! : Compte;
  public compteDetails : any ={
    id:1
  };

  constructor(private agentService: AgentService,private formBuilder :FormBuilder, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addAmountForm = this.formBuilder.group({
      amount : ['', Validators.required],
      compte : [this.compteDetails, Validators.required]
    })
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
    if(this.compteDetails.status) {
    this.compteDetails = compte
        console.log("compte details "+this.compteDetails.id+" compte amount "+this.compteDetails.amount);
    }else {
      this.openSnackBar('ce compte non-activé', 'ok')
    }
  }



  depot() {
    if(this.compteDetails.type == 'Standard'){
      if(this.compteDetails.status) {

        console.log(this.addAmountForm.value);
        this.compteDetails.amount = this.addAmountForm.value.amount
        this.addAmountForm.value.compte = this.compteDetails

        this.agentService.depotAmountStandard(this.compteDetails).subscribe(
          (response : Compte) => {
              console.log(response.amount);
              window.location.reload()
          },
          (error: HttpErrorResponse) => {
            console.log(error);
          }
    )
      }

  }
  if(this.compteDetails.type == 'Professionnel') {
    console.log(this.addAmountForm.value);
    this.compteDetails.amount = this.addAmountForm.value.amount
    this.addAmountForm.value.compte = this.compteDetails

    this.agentService.depotAmountProfessionnel(this.compteDetails).subscribe(
      (response : Compte) => {
          console.log(response.amount);
          window.location.reload()
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }
    //
  }


  public onOpenModal(mode? : string) : void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === "loginCompany") {
      document.getElementById('close-modal')?.click();
      button.setAttribute('data-target', '#LoginCompanyModal')
    }
    container?.appendChild(button);
    button.click();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
