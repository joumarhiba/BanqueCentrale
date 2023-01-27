import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../compte/Compte';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  public amount: number = 200

  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

public getProfessionnelCompte(): Observable<Compte[]>{
    return this.http.get<Compte[]>(`${this.apiServerUrl}/registration/getProfessionnel`);
}


public getStrandardCompte(): Observable<Compte[]>{
  return this.http.get<Compte[]>(`${this.apiServerUrl}/registration/getStandards`);
}

public enableStandardCompte(compte: Compte): Observable<Compte>{
  return this.http.put<Compte>(`${this.apiServerUrl}/registration/updateCompteStandard`, compte);
}

public enableProfessionnelCompte(professionnel:Compte): Observable<Compte>{
  return this.http.put<Compte>(`${this.apiServerUrl}/registration/updateCompteProfessionnel`, professionnel);
}

public depotAmountStandard(compte: Compte): Observable<Compte> {
  return this.http.put<Compte>(`${this.apiServerUrl}/registration/depotAmountStandard`, compte)
}

}
