import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Piatto, Ristorante, RistorantePiatto } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';

@Component({
  selector: 'app-visualizza-ristoranti',
  templateUrl: './visualizza-ristoranti.component.html',
  styleUrls: ['./visualizza-ristoranti.component.css']
})
export class VisualizzaRistorantiComponent implements OnInit {

  ristoranti: RistorantePiatto[] = [];
  piatti: Piatto[] = [];
  ristDaAggiungere: Ristorante[] = [];
  ristDaRimuovere: Number[] = [];

  constructor(private ajax: ServerserviceService) {}

  ngOnInit(): void {
    var obsRist: Observable<RistorantePiatto[]> = this.ajax.getRistoranti();
    obsRist.subscribe(rist => this.ristoranti = rist);
    var obsPiatti: Observable<Piatto[]> = this.ajax.getPiatti();
    obsPiatti.subscribe(piatti => this.piatti = piatti);
  }



}
