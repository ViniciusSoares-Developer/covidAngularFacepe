import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ICovidCities } from 'src/assets/interfaces/iCovidCities';
import { CovidCitiesService } from 'src/assets/services/covidCities/covid-cities.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  public dataCovidCities: Array<ICovidCities> = [];
  public dataChart: ICovidCities | undefined;
  public openChart: boolean = false;
  public listCities: Array<ICovidCities> = [];
  public fullNewDeaths: number = 0;
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

  public faEye = faEye;

  public charge: boolean = false;

  constructor(private covidCitiesService: CovidCitiesService) {}

  ngOnInit(): void {
    this.setDataCities();
    setInterval(() => this.charge = true, 2000);
  }

  //coleta os dados da cidade cidade
  public setDataCities(): void {
    this.covidCitiesService.getData.subscribe((data: any) => {
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
      });
      this.dataCovidCities.splice(0, 1);
    });
  }

  //pega as cidades apartir do estado selecionado
  public getCitiesPerStates(state: string): void {
    this.listCities = [];
    this.charge = false;
    //Limpa e depois re-insere os valores
    this.dataCovidCities.map((item)=>{
      if(item.uf === state){
        this.listCities.push(item);
      }
    })
    //coleta o valor total de obitos dentro de todas as cidades
    this.fullNewDeaths = 0;
    this.listCities.map((item: ICovidCities) => {
      this.fullNewDeaths += Number(item.new_deaths);
    })
    setInterval(()=>this.charge = true, 1000)
  }

  //formata os numeros para o estilo brasileiro
  public numberFormat(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }

  public dateFormatBR(date: any): string {
    var arr = date.split('-');
    return arr[2] + '/' + arr[1] + '/' + arr[0];
  }

  public setDataChart(value: ICovidCities): void {
    this.openChart = false;
    this.dataChart = value;
    setTimeout(()=>this.openChart = true, 100);
  }
}
