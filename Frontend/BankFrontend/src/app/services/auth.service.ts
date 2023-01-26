import { JwtHandlerService } from './jwt-handler.service';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
import { LoginRequest } from '../interfaces/loginRequest';
import { API_URL } from 'src/config/api.constants';
import { SignupRequest } from '../interfaces/signupRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authStateSubject!:BehaviorSubject<boolean>;
  isAuthenticated!:boolean;

  constructor(
    private http: HttpClient,
    private localStorageService:LocalStorageService,
    private jwtService:JwtHandlerService
    ) {



     if(!this.jwtService.isTokenExpired()) {
      console.log(" inside is not expired")
      // this.isAuthenticated = true;
      this.authStateSubject = new BehaviorSubject<boolean>(true);
    } else {
      console.log(" inside is expired")
      // this.isAuthenticated = false;
      this.authStateSubject = new BehaviorSubject<boolean>(false);
    }

     this.authStateSubject.subscribe(
          (newValue) => this.isAuthenticated = newValue
      )
   }

  signup(newUser : SignupRequest) : Observable<Response<String>>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    console.log(" new user " + newUser.email)
    console.log(" new user " + newUser.password)
    return this.http
            .post<any>(
              `${API_URL}/signup`, newUser, {headers}
            );
  }

  login(loginCredentials : LoginRequest, role:string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http
            .post<Response<String>>(
              `${API_URL}/auth/${role}`, loginCredentials, {headers}
            );
  }

  setAuthState(authState:boolean){
    this.authStateSubject.next(authState);
  }

  getAuthState() : Observable<boolean>{
    return this.authStateSubject.asObservable();
  }


  logout() {
    console.log(" is auth inside service ", this.isAuthenticated)
    localStorage.removeItem("bankconnect-token");
    this.setAuthState(false);
  }



}
