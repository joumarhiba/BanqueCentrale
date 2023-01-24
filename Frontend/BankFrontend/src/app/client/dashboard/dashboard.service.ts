import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/compte/Compte';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getStandardsByClient(): Observable<Compte[]>{
    return this.http.get<Compte[]>(`${this.api}/registration/getStandardsByClient`);
}

}
