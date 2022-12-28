import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recensione } from '../Recensione';
import { ServerserviceService } from '../serverservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizza-recensioni',
  templateUrl: './visualizza-recensioni.component.html',
  styleUrls: ['./visualizza-recensioni.component.css']
})
export class VisualizzaRecensioniComponent implements OnInit {

  recensioni: Recensione[] = [];

  sessionId: string = "";

  constructor(private servizi: ServerserviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    var sessionId = this.route.queryParams.subscribe(
      params => {
        var sessionId = params['jsessionid'];
        if (sessionId != null) {
          this.sessionId = sessionId;
          var obs: Observable<Recensione[]> = this.servizi.getRecensioni(sessionId);
          obs.subscribe(recs => this.recensioni = recs);
        }
      });
  }

}
