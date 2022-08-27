import { Component, Input, OnInit } from '@angular/core';
import { ICovidState } from 'src/app/interfaces/iCovidState';

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
    { backgroundColor: 'red', icon: 'fas fa-lungs-virus', title: 'Total de obitos', data: '0' },
    { backgroundColor: 'blue', icon: 'fas fa-heartbeat', title: 'Total de recuperados', data: '0' },
  ];

  constructor() { }

  ngOnInit(): void {
    this.cards[0].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].vaccinated);
    this.cards[1].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].cases);
    this.cards[2].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].deaths);
    this.cards[3].data = new Intl.NumberFormat('pt-BR').format(this.data[this.data.length - 1].recovered);
  }

}
