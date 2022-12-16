import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizzaRecensioniComponent } from './visualizza-recensioni/visualizza-recensioni.component';
import { VisualizzaRistorantiComponent } from './visualizza-ristoranti/visualizza-ristoranti.component';

const routes: Routes = [
  {path: 'visualizzaRecensioni', component: VisualizzaRecensioniComponent},
  {path: 'visualizzaRistoranti', component: VisualizzaRistorantiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
