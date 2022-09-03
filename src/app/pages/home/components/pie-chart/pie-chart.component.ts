import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { ICovidState } from 'src/assets/interfaces/iCovidState';

@Component({
  selector: 'app-pie-chart-obito-recuperados',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartObito implements OnInit {
  @Input() dataCovid: Array<ICovidState> = [];
  private chart: echarts.EChartsType | undefined;
  public dataChart = [
    { name: '1ª Dose', value: 0 },
    { name: '2ª Dose', value: 0 },
    { name: '3ª Dose', value: 0 },
    { name: 'Dose única', value: 0 },
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
        text: 'Vacinas',
        subtext: 'Data from WCota/covid19br',
        sublink: 'https://github.com/wcota/covid19br',
        left: 'left',
        bottom: 'top',
      },
      color: ['lightblue', 'rgb(80, 80, 200)', 'rgb(0,0,180)', 'darkblue',],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Vacinas',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.dataChart
        }
      ]
    };

    this.chart.setOption(option);
  }

  //atualiza o data do chart
  public updateDataChart(): void {
    this.dataChart[0].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_primary | 0;
    this.dataChart[1].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_second | 0;
    this.dataChart[2].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_third | 0;
    this.dataChart[3].value =
      this.dataCovid[this.dataCovid.length - 1].vaccinated_single | 0;
  }
}
