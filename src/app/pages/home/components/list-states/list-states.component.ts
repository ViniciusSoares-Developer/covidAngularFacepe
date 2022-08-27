import { Component, Input, OnInit } from '@angular/core';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.scss'],
})
export class ListStatesComponent implements OnInit {
  @Input() dataCovid: Array<ICovidState> = [];
  public hover: boolean = false;

  public dataStates = [
    { uf: 'AC', state: 'Acre', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'AL', state: 'Alagoas', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'AP', state: 'Amapá', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'AM', state: 'Amazonas', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'BA', state: 'Bahia', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'CE', state: 'Ceará', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'DF', state: 'Distrito Federal', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'ES', state: 'Espirito Santo', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'GO', state: 'Goiás', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'MA', state: 'Maranhão', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'MS', state: 'Mato Grosso do Sul', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'MT', state: 'Mato Grosso', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'MG', state: 'Minas Gerais', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'PA', state: 'Pará', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'PB', state: 'Paraíba', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'PR', state: 'Paraná', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'PE', state: 'Pernambuco', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'PI', state: 'Piauí', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'RJ', state: 'Rio de Janeiro', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'RN', state: 'Rio Grande do Norte', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'RS', state: 'Rio Grande do Sul', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'RO', state: 'Rondônia', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'RR', state: 'Roraima', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'SC', state: 'Santa Catarina', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'SP', state: 'São Paulo', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'SE', state: 'Sergipe', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
    { uf: 'TO', state: 'Tocantins', new_deaths: 0, deaths: 0, vaccinated: 0, recovered: 0},
  ];

  ngOnInit(): void {
    this.getStatesData();
  }

  //Atualiza os dados do dataStates
  public getStatesData(): void {
    //zera os dados antes de adicionar outro valor
    this.dataStates.map((itemState, iStates)=>{
      this.dataStates[iStates].new_deaths = 0;
      this.dataStates[iStates].deaths = 0;
      this.dataStates[iStates].vaccinated = 0;
      this.dataStates[iStates].recovered = 0;
    })
    //insere os dados do dataCovid dentro do dataStates se os estados forem iguais
    this.dataStates.map((itemState, iStates) => {
      this.dataCovid.map((itemCovid, iCovid) => {
        if (itemState.uf === itemCovid.state) {
          this.dataStates[iStates].new_deaths = this.dataCovid[iCovid].newDeaths;
          this.dataStates[iStates].deaths = this.dataCovid[iCovid].deaths;
          this.dataStates[iStates].vaccinated = this.dataCovid[iCovid].vaccinated;
          this.dataStates[iStates].recovered = this.dataCovid[iCovid].recovered;
        }
      });
    });
  }

  //formata os numeros para o estilo brasileiro
  public numberFormat(value: number): string {
    return new Intl.NumberFormat('pt-BR').format(value);
  }
}
