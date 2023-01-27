import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private jwt!:String;
  loading!:boolean;
  loadingLoginResult!:boolean;
  loginForm!:FormGroup;
  isAuthenticated:Boolean = false;
  animationSrc!:string;
  role!:string;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private authService: AuthService, private localStorageService:LocalStorageService) {
    // this.loading = this.authService.isLoading;
    this.isAuthenticated = this.authService.isAuthenticated;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('',[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
      ],)
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


   onSubmit() {
     this.loading = true;

     this.activatedRoute.url.subscribe(val => {
       console.log(val[1].path);
       this.role = val[1].path;
      })

    this.authService.login(this.loginForm.value, this.role.toUpperCase()).subscribe({
        next : (response) => {
            this.jwt = response.data.data;
            console.log(" jwt ", response)
            this.localStorageService.set("bankconnect-token", this.jwt.toString());
            this.authService.setAuthState(true);
            this.isAuthenticated = true;

            this.router.navigate(['/'])
            .then(() => {
              window.location.reload();
            });

        },
        error : (err:any) => {
          console.log(" errer ", err)
          this.authService.setAuthState(false);
          this.isAuthenticated = false;
          alert("Failed to loginn, credentials might be not correct, try again")
          // window.location.reload();
        },
        complete : ()=> {
          console.log(" inside complete ")
        }
      }
    ).add(() => {
      console.log(" inside add ")
      this.loading = false;

    });
  }



  hasRoute(route : string) : boolean {
    return this.router.url === route;
  }

  ngOnDestroy() {
    // if(this.authService.isLoading) this.authService.toggleIsLoading(false);
  }

}
