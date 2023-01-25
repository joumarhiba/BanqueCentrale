import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/compte/Compte';
import { Client } from './Client';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api = 'http://localhost:8080';

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

}
