import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../compte/Compte';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

public getProfessionnelCompte(): Observable<Compte[]>{
    return this.http.get<Compte[]>(`${this.apiServerUrl}/registration/getProfessionnel`);
}


public getStrandardCompte(): Observable<Compte[]>{
  return this.http.get<Compte[]>(`${this.apiServerUrl}/registration/getStandards`);
}




}
