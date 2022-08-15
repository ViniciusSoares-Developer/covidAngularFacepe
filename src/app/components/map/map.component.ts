import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { ICovid } from 'src/app/interfaces/icovid';
// @ts-ignore
import * as brazilJson from 'src/assets/brazil-states.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @Input() dataCovid: Array<ICovid> = [];

  width: number = 100;
  height: number = 100;

  public dataChart = [
    {name: 'AC', value: 0},
    {name: 'AL', value: 0},
    {name: 'AP', value: 0},
    {name: 'AM', value: 0},
    {name: 'BA', value: 0},
    {name: 'CE', value: 0},
    {name: 'DF', value: 0},
    {name: 'ES', value: 0},
    {name: 'GO', value: 0},
    {name: 'MA', value: 0},
    {name: 'MS', value: 0},
    {name: 'MT', value: 0},
    {name: 'MG', value: 0},
    {name: 'PA', value: 0},
    {name: 'PB', value: 0},
    {name: 'PR', value: 0},
    {name: 'PE', value: 0},
    {name: 'PI', value: 0},
    {name: 'RJ', value: 0},
    {name: 'RN', value: 0},
    {name: 'RS', value: 0},
    {name: 'RO', value: 0},
    {name: 'RR', value: 0},
    {name: 'SC', value: 0},
    {name: 'SP', value: 0},
    {name: 'SE', value: 0},
    {name: 'TO', value: 0},
  ];

  constructor() {}

  ngOnInit(): void {
    this.updateDataChart();
  }

  //configurações do mapa
  private chartMap() {
    var chartDom = document.getElementById('mapChart')!;
    echarts.dispose(chartDom);
    var myChart = echarts.init(chartDom);
    var option: echarts.EChartsOption;

    echarts.registerMap('BR', brazilJson);
    option = {
      visualMap: {
        left: 'right',
        min: 0,
        max: 200000,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
        text: ['Alto', 'Baixo'],
        calculable: true,
        realtime: true,
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: true },
          restore: {},
          saveAsImage: {},
        },
      },
      series: [
        {
          name: 'BR Covid Analytics',
          type: 'map',
          roam: true,
          map: 'BR',

          emphasis: {
            label: {
              show: true,
              backgroundColor: '#FFFFFF',
              position: 'right',
              borderWidth: 1,
              borderColor: 'black',
              borderType: 'solid',
              color: 'black',
              padding: 1
            },
          },
          data: this.dataChart
        },
      ],

    };

    myChart.setOption(option);
  }

  //atualização dos dados utilizados
  public updateDataChart(): void {
    this.dataChart[0].value = this.dataCovid[this.dataCovid.length - 29].deaths; // AC
    this.dataChart[1].value = this.dataCovid[this.dataCovid.length - 28].deaths; // AL
    this.dataChart[3].value = this.dataCovid[this.dataCovid.length - 27].deaths; // AM
    this.dataChart[2].value = this.dataCovid[this.dataCovid.length - 26].deaths; // AP
    this.dataChart[4].value = this.dataCovid[this.dataCovid.length - 25].deaths; // BA
    this.dataChart[5].value = this.dataCovid[this.dataCovid.length - 24].deaths; // CE
    this.dataChart[6].value = this.dataCovid[this.dataCovid.length - 23].deaths; // DF
    this.dataChart[7].value = this.dataCovid[this.dataCovid.length - 22].deaths; // ES
    this.dataChart[8].value = this.dataCovid[this.dataCovid.length - 21].deaths; // GO
    this.dataChart[9].value = this.dataCovid[this.dataCovid.length - 20].deaths; // MA
    this.dataChart[12].value = this.dataCovid[this.dataCovid.length - 19].deaths; // MG
    this.dataChart[10].value = this.dataCovid[this.dataCovid.length - 18].deaths; // MS
    this.dataChart[11].value = this.dataCovid[this.dataCovid.length - 17].deaths; // MT
    this.dataChart[13].value = this.dataCovid[this.dataCovid.length - 16].deaths; // PA
    this.dataChart[14].value = this.dataCovid[this.dataCovid.length - 15].deaths; // PB
    this.dataChart[16].value = this.dataCovid[this.dataCovid.length - 14].deaths; // PE
    this.dataChart[17].value = this.dataCovid[this.dataCovid.length - 13].deaths; // PI
    this.dataChart[15].value = this.dataCovid[this.dataCovid.length - 12].deaths; // PR
    this.dataChart[18].value = this.dataCovid[this.dataCovid.length - 11].deaths; // RJ
    this.dataChart[19].value = this.dataCovid[this.dataCovid.length - 10].deaths; // RN
    this.dataChart[21].value = this.dataCovid[this.dataCovid.length - 9].deaths; // RO
    this.dataChart[22].value = this.dataCovid[this.dataCovid.length - 8].deaths; // RR
    this.dataChart[20].value = this.dataCovid[this.dataCovid.length - 7].deaths; // RS
    this.dataChart[23].value = this.dataCovid[this.dataCovid.length - 6].deaths; // SC
    this.dataChart[25].value = this.dataCovid[this.dataCovid.length - 5].deaths; // SE
    this.dataChart[24].value = this.dataCovid[this.dataCovid.length - 4].deaths; // SP
    this.dataChart[26].value = this.dataCovid[this.dataCovid.length - 3].deaths; // TO
    // console.log(this.dataCovid[this.dataCovid.length - 2].deaths); Total deaths
    this.chartMap(); // carrega o mapa
  }

}
