import { Component, OnInit } from '@angular/core';

//Interfaces
import { ICovidCities } from 'src/assets/interfaces/iCovidCities';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

//Services
import { CovidCitiesService } from 'src/assets/services/covidCities/covid-cities.service';
import { CovidStatesService } from 'src/assets/services/covidStates/covidStates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataCovidStates: Array<ICovidState> = [];
  public dataCovidStatesPerDate: Array<ICovidState> = [];
  public dataCovidCities: Array<ICovidCities> = [];

  public ChargeMap: boolean = false;
  public datas: Array<string> = [];
  public selectDate?: string;

  constructor(
    private covidStatesService: CovidStatesService,
    private covidCitiesService: CovidCitiesService
  ) {}

  ngOnInit(): void {
    //inicializa a coleta dos dados
    this.setDataStates();
    this.setDataCities();
  }

  //coleta os dados dos estados
  public setDataStates(): void {
    this.covidStatesService.getData().subscribe((data: any) => {
      const list = data.split('\n');
      list.forEach((e: any) => {
        const items = e.split(',');
        this.dataCovidStates.push({
          date: items[1],
          country: items[2],
          state: items[3],
          city: items[4],
          newDeaths: items[5],
          deaths: items[6],
          recovered: items[14],
          suspects: items[15],
          tests: items[16],
          vaccinated: items[18],
          vaccinated_first: items[20],
          vaccinated_second: items[22],
          vaccinated_third: items[24],
          cases: items[8],
        });
      });
      this.getDatesCovid();
    });
  }

  //coleta os dados da cidade cidade
  public setDataCities(): void {
    this.covidCitiesService.getData().subscribe((data: any) => {
      const list = data.split('\n');
      list.forEach((e: any) => {
        const items = e.split(',');
        this.dataCovidCities.push({
          uf: items[1],
          name: items[2],
          deaths: items[4],
          new_deaths: items[12],
          total_cases: items[5],
          new_cases: items[11],
          date: items[10],
        });
        this.dataCovidCities.sort((a, b) => a.uf.localeCompare(b.uf));
      });
      this.dataCovidCities.splice(0, 1);
    });
  }

  //coleta as datas que tem os dados do covid
  public getDatesCovid(): void {
    this.dataCovidStates.map((item) => {
      this.datas.push(item.date);
    });
    this.datas = [...new Set(this.datas)];
    this.datas.sort((a, b) => b.localeCompare(a));
    this.datas.splice(0, 1);
    this.selectDate = this.datas[0];
    this.filterDateCovid(this.selectDate);
  }

  //filtra os dados apartir da data selecionada
  public filterDateCovid(date: any) {
    this.ChargeMap = false;
    this.dataCovidStatesPerDate = [];
    this.dataCovidStates.map((item) => {
      if (item.date === date) {
        this.dataCovidStatesPerDate.push(item);
      }
    });
    setTimeout(() => (this.ChargeMap = true), 2000);
  }
}
