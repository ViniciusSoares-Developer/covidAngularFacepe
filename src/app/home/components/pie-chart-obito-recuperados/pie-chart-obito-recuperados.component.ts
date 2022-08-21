import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { ICovidState } from 'src/app/interfaces/iCovidState';

@Component({
  selector: 'app-pie-chart-obito-recuperados',
  templateUrl: './pie-chart-obito-recuperados.component.html',
  styleUrls: ['./pie-chart-obito-recuperados.component.scss'],
})
export class PieChartObitoRecuperadosComponent implements OnInit {
  @Input() dataCovid: Array<ICovidState> = [];
  private chart: echarts.EChartsType | undefined;
  public dataChart = [{name: "Obitos", value: 0}, {name: "Recuperados", value: 0}];

  constructor() {}

  ngOnInit(): void {
    this.chartPie();
    $(window).on('resize', () => {
      if (this.chart != null && this.chart != undefined) {
        this.chart.resize();
      }
    });
  }

  public chartPie(): void {
    this.updateDataChart();

    var chartDom = document.getElementById('pieChart')!;
    this.chart = echarts.init(chartDom);
    var option: echarts.EChartsOption;

    option = {
      title: {
        text: 'Obitos e Recuperados(Total)',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Grafic',
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

  //atualização dos dados utilizados
  public updateDataChart(): void {
    // this.dataChart.map((item, index)=>this.dataChart[index].value = 0) //zera todos os valores do dataChart
    // inseri os valores determinantemente pelo estado
    this.dataChart[0].value = this.dataCovid[this.dataCovid.length - 1].deaths
    this.dataChart[1].value = this.dataCovid[this.dataCovid.length - 1].recovered
    console.log(this.dataCovid);
  }
  
  public updateChartValues(): void {
    this.chart!.setOption({
      series: [
        {
          data: this.dataChart,
        },
      ],
    });    
  }
}
