import { Component, OnInit } from '@angular/core';
import { ServerserviceService } from './serverservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogged: Boolean = false;

  sessionId: string = "";

  title = 'Amministrazione Recensioni';

  constructor(private servizi: ServerserviceService) {}

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    var sessionId = urlParams.get("jsessionid");
    if (sessionId) {
      this.servizi.checkLogin(sessionId).subscribe(ok => {
        this.isLogged = ok
        if (ok && sessionId != null) {
          this.sessionId = sessionId;
        }
      });
    }
  }

}
