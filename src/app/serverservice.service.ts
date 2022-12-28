import { Injectable } from '@angular/core';
import { Piatto, Recensione, RistorantePiatto } from './Recensione';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:8080";

  getRecensioni(jsessionId: string): Observable<Recensione[]> {
    var recensioni: Observable<Recensione[]> = this.http.post<Recensione[]>(this.url + "/dammiRecensioni?jsessionid="+jsessionId, {});
    return recensioni;
  }

  getRistoranti(): Observable<RistorantePiatto[]> {
    var ristoranti: Observable<RistorantePiatto[]> = this.http.get<RistorantePiatto[]>(this.url + "/dammiRistoranti");
    return ristoranti;
  }

  getPiatti(): Observable<Piatto[]> {
    var piatti: Observable<Piatto[]> = this.http.get<Piatto[]>(this.url + "/dammiPiatti");
    return piatti;
  }

  checkLogin(jsessionid: string): Observable<Boolean> {
    // let queryParams = new HttpParams();
    // queryParams.append("jsessionid", jsessionid);
    return this.http.get<Boolean>(this.url + "/checkAuth", {params: {jsessionid: jsessionid}});
  }

}
