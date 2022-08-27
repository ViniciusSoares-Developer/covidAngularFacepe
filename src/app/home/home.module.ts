import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Components
import { CardsComponent } from './components/cards/cards.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';
import { ListStatesComponent } from './components/list-states/list-states.component';
import { MapComponent } from './components/map/map.component';
import { PieChartObitoRecuperadosComponent } from './components/pie-chart-obito-recuperados/pie-chart-obito-recuperados.component';




@NgModule({
  declarations: [
    ListCitiesComponent,
    ListStatesComponent,
    MapComponent,
    PieChartObitoRecuperadosComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListCitiesComponent,
    ListStatesComponent,
    MapComponent,
    PieChartObitoRecuperadosComponent,
    CardsComponent
  ]
})
export class HomeModule { }
