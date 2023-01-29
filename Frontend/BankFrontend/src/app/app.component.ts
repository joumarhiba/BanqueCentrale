import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankFrontend';
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

  isAuthenticated!:boolean;


  constructor(private router: Router, private authService:AuthService){
    this.authService.getAuthState().subscribe((newState:any) => this.isAuthenticated = newState)
  }

  doLogin() {
    // window.location.href='/ agent'
    this.router.navigateByUrl('auth/agent')
  }


  doLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/agent'])
    .then(() => {
      window.location.reload();
    });
  }

  hasRoute(route:string) : boolean {
    return this.router.url.includes(route);
  }
}
