import { Component, OnInit } from '@angular/core';
import { ICovidState } from 'src/app/interfaces/iCovidState';
import { CovidStatesService } from 'src/app/services/covidStates/covidStates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public dataCovidStates: Array<ICovidState> = [];
  public ChargeMap: boolean = false;
  public dataCovidPerDate: Array<ICovidState> = [];
  public datas: Array<string> = [];
  public selectDate?: string;

  constructor(private covidStatesService: CovidStatesService) {}

  ngOnInit(): void {
    this.setData();
    setTimeout(() => {
      this.ChargeMap = true;
    }, 2000);
  }

  public setData(): void {
    // Estados
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
          cases: items[8],
        });
      });
      this.getDatesCovid();
    });
  }

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

  public filterDateCovid(date: any) {
    this.ChargeMap = false;
    this.dataCovidPerDate = [];
    this.dataCovidStates.map((item) => {
      if (item.date === date) {
        this.dataCovidPerDate.push(item);
      }
    });
    setTimeout(()=>this.ChargeMap = true, 1000)
  }
}
