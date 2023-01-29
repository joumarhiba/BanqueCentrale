import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from 'src/app/compte/Compte';

@Injectable({
  providedIn: 'root'
})
export class DialogStandardService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public addStandardCompte(compte: Compte){
    return this.http.post<Compte>(`${this.api}/registration/addCompteStandard`, compte);
  }

  public addProfessionnelCompte(compte: Compte){
    return this.http.post<Compte>(`${this.api}/registration/addCompteProfessionnel`, compte);
  }
}
