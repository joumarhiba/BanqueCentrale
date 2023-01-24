import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Client } from './client/dashboard/Client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public credentials : any = {
    id: 11,
    email: 'Newclient@gmail.com',
    username: 'test2',
    userRole:'CLIENT',
    password:'12345678',
    telephone:'0666666667',
    enabled: false
  }
  private content = new BehaviorSubject<any>(this.credentials)
  public share = this.content.asObservable()

  title = 'BankFrontend';


  constructor(private router: Router){}

  doLogin() {
    // this.router.navigate(['/agent'])
    this.router.navigate(['/dashboard'])

  }
}
