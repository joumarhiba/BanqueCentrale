import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Client } from '../dashboard/Client';
import { DialogStandardService } from './dialog-standard.service';

@Component({
  selector: 'app-dialog-standard',
  templateUrl: './dialog-standard.component.html',
  styleUrls: ['./dialog-standard.component.css']
})
export class DialogStandardComponent implements OnInit {

  public agent : Object = {
    id: 12,
    email: 'agent@gmail.com',
    username: 'agent',
    userRole:'AGENT'
  }

  public credentials : Client = {
    id: 16,
    // email: 'Newclient@gmail.com',
    // username: 'test2',
    // userRole:'CLIENT',
    // password:'12345678',
    // telephone:'0666666667',
    // enabled: false
  }
  compteForm !: FormGroup
  constructor(private formBuilder :FormBuilder,private dialogService: DialogStandardService) {}


  ngOnInit(): void {
    this.compteForm = this.formBuilder.group({
      type : ['', Validators.required],
      client_id : [this.credentials, Validators.required],
      agent_id : [this.agent, Validators.required]
    })
  }


  addCompte() {
    console.log('type '+this.compteForm.value.type);
    if( this.compteForm.value.type == 'Standard') {
      this.dialogService.addStandardCompte(this.compteForm.value)
      .subscribe(
        data => {
          console.log('Success for standard!', data);
          window.location.reload()
    },
        error => console.log('Error!', error)
      );
    }
    else if( this.compteForm.value.type == 'Professionnel') {
      this.dialogService.addProfessionnelCompte(this.compteForm.value)
      .subscribe(
        data => {
          console.log('Success for professionnel!', data);
          window.location.reload()
      },
        error => console.log('Error!', error)
      );
    }
}

}
