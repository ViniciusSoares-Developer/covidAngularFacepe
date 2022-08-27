import { Component, Input } from '@angular/core';
import { ICovidCities } from 'src/assets/interfaces/iCovidCities';

@Component({
  selector: 'app-list-cities',
  templateUrl: './list-cities.component.html',
  styleUrls: ['./list-cities.component.scss']
})
export class ListCitiesComponent {
  @Input() dataCovid: Array<ICovidCities> = [];
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

  //pega as cidades apartir do estado selecionado
  public getCitiesPerStates(state: string): void {
    //Limpa e depois re-insere os valores
    this.listCities = [];
    this.dataCovid.map((item)=>{
      if(item.uf === state){
        this.listCities.push(item);
      }
    })
    //coleta o valor total de obitos dentro de todas as cidades
    this.fullNewDeaths = 0;
    this.listCities.map((item: ICovidCities) => {
      this.fullNewDeaths += Number(item.new_deaths);
    })
  }

  //formata os numeros para o estilo brasileiro
  public numberFormat(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }
}
