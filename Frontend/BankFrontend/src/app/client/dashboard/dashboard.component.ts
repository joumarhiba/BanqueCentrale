import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Compte } from 'src/app/compte/Compte';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  // @Input() credentials: any;
  text = {
    id:null,
    email:null,
    username: null,
    userRole:null
  }
  public comptes : Compte[] = [];
  public credentials = {}


  displayedColumns: string[] = ['numC', 'type', 'amount', 'client_id', 'enable'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dashboardService: DashboardService, private appC : AppComponent) { }

    ngOnInit(): void {
      this.appC.share.subscribe(x => this.text = x)
    this.getStandardsByClient()
  }


  public getStandardsByClient() {

    this.dashboardService.getStandardsByClient().subscribe(
      (standards : Compte[]) => {
          this.comptes = standards;
        this.dataSource =new MatTableDataSource(this.comptes)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )


  }



}
