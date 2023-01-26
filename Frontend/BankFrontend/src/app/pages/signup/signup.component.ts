import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { SignupRequest } from 'src/app/interfaces/signupRequest';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSuccess!:Boolean;
  loadingSignupResult!:Boolean;
  animationSrc!:string;
  signupForm!:FormGroup;
  signupRequest!:SignupRequest;

  roles:String[] = ["EMPLOYER", "VISITOR"]

  constructor(private authService: AuthService, private router:Router) {
    this.signupForm = new FormGroup({
      username : new FormControl(null,[
        Validators.required,
        ],
      ),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]
      ),
      password: new FormControl(null,[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        ],),
      repeatpassword: new FormControl(null,[
        Validators.required,
        // Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        ],),
      address: new FormControl(null,[
        Validators.required
        ],),
      tele: new FormControl(null,[
        Validators.required
        ],),
      role: new FormControl(null,[
        Validators.required,
        Validators.pattern("^(?!ROLE_AGENT).*$")
        ],),
    })

   }


  ngOnInit(): void {
  }


  get username (){ return this.signupForm.get('username')};
  get address (){ return this.signupForm.get('address')};
  get tele (){ return this.signupForm.get('tele')};
  get role (){ return this.signupForm.get('role')};
  get email (){ return this.signupForm.get('email')};
  get password (){ return this.signupForm.get('password')};
  get repeatpassword (){ return this.signupForm.get('repeatpassword')};

  onSubmit() {
    const {repeatpassword, ...rest} = this.signupForm.value;

    console.warn(this.signupRequest);
    //signup user
    this.authService.signup(rest).subscribe(
      {
        next: (data:any) => {
          console.log("data ", data );
          this.isSuccess = true;
        },
        error: (err:any) => this.isSuccess = false
      }).add(() => {

      });
  }

}
