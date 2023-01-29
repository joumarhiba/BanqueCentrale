import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from 'src/app/compte/Compte';
import { API_URL } from 'src/config/api.constants';

@Injectable({
  providedIn: 'root'
})
export class DialogStandardService {

  // private api = 'http://localhost:8080';
  private api = API_URL;

  constructor(private http: HttpClient) { }

  public addStandardCompte(compte: Compte){
    return this.http.post<Compte>(`${this.api}/registration/addCompteStandard`, compte);
  }

  public addProfessionnelCompte(compte: Compte){
    return this.http.post<Compte>(`${this.api}/registration/addCompteProfessionnel`, compte);
  }
}
