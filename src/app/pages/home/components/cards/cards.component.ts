import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeadSideMask, faHeartbeat, faLungsVirus, faSyringe } from '@fortawesome/free-solid-svg-icons';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() data: Array<ICovidState> = [];
  public cards: Array<{backgroundColor: string; icon: IconDefinition; title: string; data: string}> = [
    { backgroundColor: 'green', icon: faSyringe, title: 'Total de vacinados', data: '0' },
    { backgroundColor: 'orange', icon: faHeadSideMask, title: 'Total de casos', data: '0' },
    { backgroundColor: 'red', icon: faLungsVirus, title: 'Total de óbitos', data: '0' },
    { backgroundColor: 'darkblue', icon: faHeartbeat, title: 'Total de recuperados', data: '0' },
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
