import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { CardsComponent } from './home/components/cards/cards.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { ListCitiesComponent } from './home/components/list-cities/list-cities.component';
import { ListStatesComponent } from './home/components/list-states/list-states.component';
import { MapComponent } from './home/components/map/map.component';
import { PieChartObitoRecuperadosComponent } from './home/components/pie-chart-obito-recuperados/pie-chart-obito-recuperados.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    ListCitiesComponent,
    ListStatesComponent,
    MapComponent,
    PieChartObitoRecuperadosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
