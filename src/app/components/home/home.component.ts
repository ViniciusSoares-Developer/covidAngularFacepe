import { Component, OnInit } from '@angular/core';
import { ICovid } from 'src/app/interfaces/icovid';
import { CovidService } from 'src/app/services/covid/covid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataCovid: Array<ICovid> = [];
  public ChargeMap: boolean = false;

  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.setData();
    setTimeout(()=>this.ChargeMap = true, 1000);
  }

  public setData(): void {
    this.covidService.getData().subscribe((data) => {
      const list = data.split('\n');
      list.forEach((e: any) => {
        const items = e.split(',');
        this.dataCovid.push({
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
        });
      });
      // this.dataCovid.sort((a,b)=>b.date.localeCompare(a.date));
    });
  }

}
