import { Component, OnInit } from '@angular/core';

//Interfaces
import { ICovidState } from 'src/assets/interfaces/iCovidState';

//Services
import { CovidStatesService } from 'src/assets/services/covidStates/covidStates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataCovidStates: Array<ICovidState> = [];
  public dataCovidStatesPerDate: Array<ICovidState> = [];

  public charge: boolean = false;
  public datas: Array<string> = [];
  public selectDate?: string;

  constructor(private covidStatesService: CovidStatesService) {}

  ngOnInit(): void {
    //inicializa a coleta dos dados
    this.setDataStates();
  }

  //coleta os dados dos estados
  public setDataStates(): void {
    this.covidStatesService.getData.subscribe((data: any) => {
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
          vaccinated_total: Number(items[18]) + Number(items[20]) + Number(items[22]) + Number(items[24]),
          vaccinated_single: items[22],
          vaccinated_primary: items[18],
          vaccinated_second: items[20],
          vaccinated_third: items[24],
          cases: items[8],
        });
      });
      this.getDatesCovid();
    });
  }

  //coleta as datas que tem os dados do covid
  public getDatesCovid(): void {
    this.dataCovidStates.map((item) => {
      if(item.date){
        this.datas.push(item.date);
      }
    });
    this.datas = [...new Set(this.datas)];
    this.datas.sort((a, b) => b.localeCompare(a));
    this.datas.splice(0, 1);
    this.selectDate = this.datas[0];
    this.filterDateCovid(this.selectDate);
  }

  //filtra os dados apartir da data selecionada
  public filterDateCovid(date: any) {
    this.charge = false;
    this.dataCovidStatesPerDate = [];
    this.dataCovidStates.map((item) => {
      if (item.date === date) {
        this.dataCovidStatesPerDate.push(item);
      }
    });
    console.log(this.selectDate);
    setTimeout(() => (this.charge = true), 1000);
  }

  public dateFormatBR(date: any): string {
    var arr = date.split('-');
    return arr[2] + '/' + arr[1] + '/' + arr[0];
  }
}
