import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogProfessionnelService {

  public amount : number = 100

  constructor() { }

  // public addStandardCompte(compte: Compte){
  //   return this.http.post<Compte>(`${this.api}/registration/addCompteStandard`, compte);
  // }

}
