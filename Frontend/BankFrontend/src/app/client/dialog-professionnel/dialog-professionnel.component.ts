import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/agent/agent.service';
import { Compte } from 'src/app/compte/Compte';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dialog-professionnel',
  templateUrl: './dialog-professionnel.component.html',
  styleUrls: ['./dialog-professionnel.component.css']
})
export class DialogProfessionnelComponent implements OnInit {


  constructor(private agentService: AgentService,private dashboardService : DashboardService){}

  public  text: Object = {
    id:0,
    enable:false,
    amount:0,
    type: '',
    numC:0,
    agent : {},
    client : {}
    }
  ngOnInit(): void {
      this.dashboardService.share.subscribe(x => {this.text = x; console.log("x :: "+x.type);
      })

  }



  depot() {
  //   console.log(this.compteDetails.amount);
    // this.agentService.depotAmountStandard(this.compteDetails).subscribe(
    //   (response : Compte) => {
    //       console.log(response.amount);
    // },
    //   (error: HttpErrorResponse) => {
    //     console.log(error);
    //   }
    // )
  }

}
