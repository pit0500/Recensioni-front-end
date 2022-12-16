import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RistorantePiatto } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';

@Component({
  selector: 'app-visualizza-ristoranti',
  templateUrl: './visualizza-ristoranti.component.html',
  styleUrls: ['./visualizza-ristoranti.component.css']
})
export class VisualizzaRistorantiComponent implements OnInit {

  ristoranti: RistorantePiatto[] = [];

  constructor(private ajax: ServerserviceService) {}

  ngOnInit(): void {
    var obs: Observable<RistorantePiatto[]> = this.ajax.getRistoranti();
    obs.subscribe(rist => this.ristoranti = rist);
  }

}
