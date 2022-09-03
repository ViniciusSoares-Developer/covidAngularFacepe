import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Components
import { CardsComponent } from './home/components/cards/cards.component';
import { ListStatesComponent } from './home/components/list-states/list-states.component';
import { MapComponent } from './home/components/map/map.component';
import { PieChartObito } from './home/components/pie-chart/pie-chart.component';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { TodayComponent } from './today/today.component';
import { BarChartComponent } from './today/components/bar-chart/bar-chart.component';
import { InformationsComponent } from './informations/informations.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    ListStatesComponent,
    MapComponent,
    FooterComponent,
    PieChartObito,
    TodayComponent,
    HeaderComponent,
    BarChartComponent,
    InformationsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PagesRoutingModule,
    FontAwesomeModule
  ],
})
export class PagesModule { }
