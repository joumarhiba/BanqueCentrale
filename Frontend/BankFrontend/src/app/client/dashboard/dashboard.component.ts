import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Compte } from 'src/app/compte/Compte';
import { DialogStandardComponent } from '../dialog-standard/dialog-standard.component';
import { Client } from './Client';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  // @Input() credentials: any;
  // text: Object = {
  //   id:0,
  //   email:'',
  //   username: '',
  //   userRole:'',
  //   password: '',
  //   telephone: '',
  //   enabled: false
  // }
  public standards : Compte[] = [];
  public professionnels: Compte[] = []
  public compteDetails : Compte = {
    id:0,
    enable:false,
    amount:0,
    type: '',
    numC:0,
    agent : {},
    client : {}
  };
  public credentials : Client = {
    id: 16,
    // email: 'Newclient@gmail.com',
    // username: 'test2',
    // userRole:'CLIENT',
    // password:'12345678',
    // telephone:'0666666667',
    // enabled: false
  }


  displayedColumns: string[] = ['numC', 'type', 'amount', 'enable', 'option'];
  dataSource!: MatTableDataSource<any>;
  dataPro!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private dashboardService: DashboardService, public dialog: MatDialog) { }

    ngOnInit(): void {
    this.getStandardsByClient()
    this.getProfessionnelsByClient()
  }


  public getStandardsByClient() {
    this.dashboardService.getStandardsByClient(this.credentials).subscribe(
      (standards : Compte[]) => {
          this.standards = standards;
        this.dataSource =new MatTableDataSource(this.standards)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  public getProfessionnelsByClient() {
    this.dashboardService.getProfessionnelsByClient(this.credentials).subscribe(
      (professionnels : Compte[]) => {
          this.professionnels = professionnels;
        this.dataPro =new MatTableDataSource(this.professionnels)
        // this.dataPro.paginator = this.paginatorPro;
        // this.dataPro.sort = this.sortPro;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }


  openDialogStandard() {
    this.dialog.open(DialogStandardComponent, {
      width:'30%',
    });
  }


  public compteInfos(compte: Compte) : void{
    this.compteDetails = compte;
    console.log("details : "+this.compteDetails.id);

  }



}
