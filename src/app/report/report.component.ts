import { Component, OnInit ,ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

import { series } from "./data";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})


export class ReportComponent  {

  @ViewChild("chart") chart: ChartComponent | any;;
  public chartOptions: Partial<ChartOptions> | any;

  current_page: any = "consumer_stats";
  constructor() {

      console.log(series.DownloadsData.dates);
      this.chartOptions = {
        series: [
          {
            name: "Downloads",
            data: series.DownloadsData.downloads
          }
        ],
        chart: {
          type: "area",
          height: 350,
          background: '#fff',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        fill: {
          type: 'solid',
        },
        title: {
          text: "Downloads",
          align: "left"
        },
        labels: series.DownloadsData.dates,
        xaxis: {
          type: "category"
        },
        yaxis: {
          opposite: false
        },
        legend: {
          horizontalAlign: "left"
        }
      };

      
   }

  ngOnInit(): void {

  }

   tabChange(current_page: any) {
      this.current_page = current_page;
  }
}
