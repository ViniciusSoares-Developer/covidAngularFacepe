import { Component, OnInit } from '@angular/core';
import { ICovidCities } from 'src/app/interfaces/ICovidCities';
import { CovidCitiesService } from 'src/app/services/covidCities/covid-cities.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {
  public dataCovid: Array<ICovidCities> = [];
  public view: boolean = false;

  constructor(private covidCitiesService: CovidCitiesService) { }

  ngOnInit(): void {
    this.setData();
  }

  public setData(): void{
    this.covidCitiesService.getData().subscribe((data: any)=> {
      const list = data.split('\n');
      list.forEach((e: any)=> {
        const items = e.split(',');
        this.dataCovid.push({
          uf: items[1],
          name: items[2],
          deaths: items[4],
          new_deaths: items[12],
          total_cases: items[5],
          new_cases: items[11],
          date: items[10]
        })
        this.dataCovid.sort((a,b)=>a.uf.localeCompare(b.uf))
      })
      this.dataCovid.splice(0,1)
    })
  }
}
