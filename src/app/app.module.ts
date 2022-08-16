import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListStatesComponent } from './components/list-states/list-states.component';
import { MapComponent } from './components/map/map.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    ListStatesComponent,
    ListCitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
