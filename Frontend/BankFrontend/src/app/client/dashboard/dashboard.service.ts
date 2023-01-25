import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { Compte } from 'src/app/compte/Compte';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api = 'http://localhost:8080';
  public compteDetails : Compte = {
    id:0,
    enable:false,
    amount:0,
    type: '',
    numC:0,
    agent : {},
    client : {}
  };

  constructor(private http: HttpClient) { }

  public getStandardsByClient(client: Client){
    return this.http.get<Compte[]>(`${this.api}/registration/getStandardsByClient/${client.id}`
    // , {
    //     responseType: 'text' as 'json',
    //   }
    );
}

public getProfessionnelsByClient(client: Client){
  return this.http.get<Compte[]>(`${this.api}/registration/getProfessionnelsByClient/${client.id}`
  );
}

public compteInfos(compte: Compte) : void{
  this.compteDetails = compte;
  console.log("details : "+this.compteDetails.id);

}

private content = new BehaviorSubject<any>(this.compteDetails)
public share = this.content.asObservable()

updateData(text: any){
  this.content.next(text)
}

}
