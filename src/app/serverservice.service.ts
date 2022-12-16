import { Injectable } from '@angular/core';
import { Recensione, Ristorante, RistorantePiatto } from './Recensione';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerserviceService {

  constructor(private http: HttpClient) { }

  getRecensioni(): Observable<Recensione[]> {
    var recensioni: Observable<Recensione[]> = this.http.get<Recensione[]>("http://localhost:8080/dammiRecensioni");
    return recensioni;
  }

  getRistoranti(): Observable<RistorantePiatto[]> {
    var ristoranti: Observable<RistorantePiatto[]> = this.http.get<RistorantePiatto[]>("http://localhost:8080/dammiRistoranti");
    return ristoranti;
  }

}
