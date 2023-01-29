import { AgentComponent } from './../../agent/agent.component';
import { AgentService } from './../../agent/agent.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Compte } from 'src/app/compte/Compte';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-dialog-professionnel',
  templateUrl: './dialog-professionnel.component.html',
  styleUrls: ['./dialog-professionnel.component.css'],
})
export class DialogProfessionnelComponent implements OnInit {

  addAmountForm !: FormGroup

  constructor(private agentComponent : AgentComponent, private formBuilder :FormBuilder, private agentService: AgentService,private dashboardService : DashboardService){}

  public compteDetails : Object = {
    id:22,
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
    this.addAmountForm = this.formBuilder.group({
      amount : ['', Validators.required],
      compte : [this.compteDetails, Validators.required]
    })
      // this.dashboardService.share.subscribe(x => {this.text = x; console.log("x :: "+x.type);
      // console.log("some data == "+this.data.id);

      // })

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
