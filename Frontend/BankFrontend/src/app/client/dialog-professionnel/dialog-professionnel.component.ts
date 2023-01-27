import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentService } from 'src/app/agent/agent.service';
import { Compte } from 'src/app/compte/Compte';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dialog-professionnel',
  templateUrl: './dialog-professionnel.component.html',
  styleUrls: ['./dialog-professionnel.component.css'],
})
export class DialogProfessionnelComponent implements OnInit {

  addAmountForm !: FormGroup
  amountFormControl = new FormControl('', [Validators.required, Validators.email]);


  constructor(private agentService: AgentService,private dashboardService : DashboardService){}

  public compteDetails : Compte = {
    id:22,
    amount: 955,
    enable: false,
    numC:11111111,
    type: 'Standard',
    agent: {},
    client: {}
  };
  // public  text: Object = {
  //   id:0,
  //   enable:false,
  //   amount:0,
  //   type: '',
  //   numC:0,
  //   agent : {},
  //   client : {}
  //   }
  ngOnInit(): void {
    this.depot()
      // this.dashboardService.share.subscribe(x => {this.text = x; console.log("x :: "+x.type);
      // console.log("some data == "+this.data.id);

      // })

  }



  depot() {
    console.log(this.compteDetails.amount);
    this.agentService.depotAmountStandard(this.compteDetails).subscribe(
      (response : Compte) => {
          console.log(response.amount);
    },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
    console.log(this.amount);

  }


  public get amount() : number{
    console.log("get amount : " +this.agentService.amount
    );
    return this.agentService.amount;

  }
  public set amount(value : number) {
this.agentService.amount = value
console.log("get amount : this.agentService.amount"
    );
  }

}
