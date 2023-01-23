import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BankFrontend';

  constructor(private router: Router){}

  doLogin() {
    // window.location.href='/ agent'
    this.router.navigate(['/agent'])
  }
}
