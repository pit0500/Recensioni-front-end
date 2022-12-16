import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizzaRecensioniComponent } from './visualizza-recensioni/visualizza-recensioni.component';
import { VisualizzaRistorantiComponent } from './visualizza-ristoranti/visualizza-ristoranti.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizzaRecensioniComponent,
    VisualizzaRistorantiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
