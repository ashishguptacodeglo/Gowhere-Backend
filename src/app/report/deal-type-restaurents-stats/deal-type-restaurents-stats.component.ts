import { Component, OnInit } from '@angular/core';
import {ChartComponent, ApexAxisChartSeries,ApexChart, ApexXAxis,ApexDataLabels,ApexStroke,ApexYAxis,ApexTitleSubtitle,ApexLegend,ApexFill,ApexPlotOptions,ApexTooltip,ApexResponsive} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    plotOptions: ApexPlotOptions;
    chart: ApexChart;
    xaxis: ApexXAxis;
    fill: ApexFill;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    yaxis: ApexYAxis;
    title: ApexTitleSubtitle;
    labels: any;
    legend: ApexLegend;
    subtitle: ApexTitleSubtitle;
    tooltip: ApexTooltip;
    responsive: ApexResponsive[];
};

@Component({
  selector: 'app-deal-type-restaurents-stats',
  templateUrl: './deal-type-restaurents-stats.component.html',
  styleUrls: ['./deal-type-restaurents-stats.component.css']
})
export class DealTypeRestaurentsStatsComponent implements OnInit {
  public deal_type_by_restaurents1: Partial <ChartOptions> | any;
  public deal_type_by_restaurents2: Partial <ChartOptions> | any;
  public deal_type_by_restaurents3: Partial <ChartOptions> | any;

  constructor() {

      this.deal_type_by_restaurents1 = {
            series: [33, 33, 34],
            chart: {
                type: "donut"
            },
            stroke: {
                width: 0
            },
            labels: ["# BOGO", "# % Off", "# Fry Friday"],
            legend: {
                show: false,
                position: "top",
            },
            fill: {
                type: "solid",
                colors: ['#4663C4', '#2EA060', '#F99B33']
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "top"
                    }
                }
            }]
        };
        this.deal_type_by_restaurents2 = {
            series: [33, 33, 34],
            chart: {
                type: "donut"
            },
            stroke: {
                width: 0
            },
            labels: ["# BOGO", "# % Off", "# Fry Friday"],
            legend: {
                show: false,
                position: "top",
            },
            fill: {
                type: "solid",
                colors: ['#4663C4', '#2EA060', '#F99B33']
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "top"
                    }
                }
            }]
        };
        this.deal_type_by_restaurents3 = {
            series: [33, 33, 34],
            chart: {
                type: "donut"
            },
            stroke: {
                width: 0
            },
            labels: ["# BOGO", "# % Off", "# Fry Friday"],
            legend: {
                show: false,
                position: "top",
            },
            fill: {
                type: "solid",
                colors: ['#4663C4', '#2EA060', '#F99B33']
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: "top"
                    }
                }
            }]
        };
        
   }

  ngOnInit(): void {
  }

}
