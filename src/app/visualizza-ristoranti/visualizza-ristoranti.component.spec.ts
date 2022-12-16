import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaRistorantiComponent } from './visualizza-ristoranti.component';

describe('VisualizzaRistorantiComponent', () => {
  let component: VisualizzaRistorantiComponent;
  let fixture: ComponentFixture<VisualizzaRistorantiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizzaRistorantiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaRistorantiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
