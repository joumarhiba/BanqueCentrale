import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Obj } from '@popperjs/core';
import { AppComponent } from 'src/app/app.component';
import { Compte } from 'src/app/compte/Compte';
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
  public credentials : Client = {
    id: 16,
    email: 'Newclient@gmail.com',
    username: 'test2',
    userRole:'CLIENT',
    password:'12345678',
    telephone:'0666666667',
    enabled: false
  }


  displayedColumns: string[] = ['numC', 'type', 'amount', 'enable'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dashboardService: DashboardService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      // this.appC.share.subscribe(x => this.credentials = x)
    // console.log('text :::: '+ JSON.stringify(this.text));
    // console.log(this.credentials);
    // this.getStandardsByClient(JSON.stringify(this.text))
    this.getStandardsByClient()
    console.log(this.activatedRoute.snapshot.paramMap.get('client_id'));

  }


  public getStandardsByClient() {

    this.dashboardService.getStandardsByClient(this.credentials).subscribe(
      (standards : Compte[]) => {
          this.standards = standards;
        this.dataSource =new MatTableDataSource(this.standards)
        console.log("the data  === "+this.standards);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )


  }



}
