import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartObitoRecuperadosComponent } from './pie-chart-obito-recuperados.component';

describe('PieChartObitoRecuperadosComponent', () => {
  let component: PieChartObitoRecuperadosComponent;
  let fixture: ComponentFixture<PieChartObitoRecuperadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartObitoRecuperadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartObitoRecuperadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
