import { Component, Input, OnInit } from '@angular/core';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() data: Array<ICovidState> = [];
  public cards: Array<{backgroundColor: string; icon: string; title: string; data: string}> = [
    { backgroundColor: 'green', icon: 'fas fa-syringe', title: 'Total de vacinados', data: '0' },
    { backgroundColor: 'orange', icon: 'fas fa-head-side-mask', title: 'Total de casos', data: '0' },
    { backgroundColor: 'red', icon: 'fas fa-lungs-virus', title: 'Total de óbitos', data: '0' },
    { backgroundColor: 'darkblue', icon: 'fas fa-heartbeat', title: 'Total de recuperados', data: '0' },
  ];

  constructor() { }

  ngOnInit(): void {
    //formata os numeros para o estilo brasileiro
    this.cards[0].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].vaccinated_total);
    this.cards[1].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].cases);
    this.cards[2].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].deaths);
    this.cards[3].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].recovered);
  }

}
