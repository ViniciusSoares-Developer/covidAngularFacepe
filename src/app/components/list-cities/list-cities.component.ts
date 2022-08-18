import { Component, Input, OnInit } from '@angular/core';
import { ICovidCities } from 'src/app/interfaces/iCovidCities';
import { CovidCitiesService } from 'src/app/services/covidCities/covid-cities.service';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent implements OnInit {
  @Input() dataCovid: Array<ICovidCities> = [];
  public listCities: Array<ICovidCities> = [];
  public states = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espirito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ];
  public selectBool: boolean = false;

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
    this.selectBool = true;
  }

  public getCitiesPerStates(state: string): void {
    this.listCities = [];
    this.dataCovid.map((item)=>{
      if(item.uf === state){
        this.listCities.push(item);
      }
    })
  }
}
