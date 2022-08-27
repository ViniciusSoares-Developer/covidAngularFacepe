import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

@Component({
  selector: 'app-pie-chart-obito-recuperados',
  templateUrl: './pie-chart-obito-recuperados.component.html',
  styleUrls: ['./pie-chart-obito-recuperados.component.scss'],
})
export class PieChartObitoRecuperadosComponent implements OnInit {
  @Input() dataCovid: Array<ICovidState> = [];
  private chart: echarts.EChartsType | undefined;
  public dataChart = [
    { name: '1ª Dose', value: 0 },
    { name: '2ª Dose', value: 0 },
    { name: '3ª Dose', value: 0 },
  ];

  constructor() {}

  ngOnInit(): void {
    this.chartPie();
    //Atualiza o tamanho do chart
    $(window).on('resize', () => {
      if (this.chart != null && this.chart != undefined) {
        this.chart.resize();
      }
    });
  }

  //Cria o chart de pizza
  public chartPie(): void {
    //chama a atualização do data do chart antes de criar ele
    this.updateDataChart();

    var chartDom = document.getElementById('pieChart')!;
    this.chart = echarts.init(chartDom);
    var option: echarts.EChartsOption;

    option = {
      title: {
        text: 'Dados de vacinação',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        bottom: 'center',
        left: 'left',
      },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: this.dataChart,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    this.chart.setOption(option);
  }

  //atualiza o data do chart
  public updateDataChart(): void {
    this.dataChart[0].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_first | 0;
    this.dataChart[1].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_second | 0;
    this.dataChart[2].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_third | 0;
  }
}
