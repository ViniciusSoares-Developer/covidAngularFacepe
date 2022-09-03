import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import * as $ from 'jquery';
import { ICovidCities } from 'src/assets/interfaces/iCovidCities';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  @Input() data?: ICovidCities;
  public chart: echarts.EChartsType | undefined;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
    $(window).on('resize', () => {
      if (this.chart != null && this.chart != undefined) {
        this.chart.resize();
      }
    });
  }

  public createChart(): void {

    var chartDom = document.getElementById('chart')!;
    this.chart = echarts.init(chartDom);
    var option: echarts.EChartsOption;

    option = {
      title: {
        text: this.data?.name,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ['Novos óbitos', 'Total de óbitos', 'Novos casos', 'Total de casos'],
      },
      series: [
        {
          type: 'bar',
          data: [this.data?.new_deaths || 0, this.data?.deaths || 0, this.data?.new_cases || 0, this.data?.total_cases || 0],
        }
      ],
    };

    this.chart.setOption(option);
  }
}
