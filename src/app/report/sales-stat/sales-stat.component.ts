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
  selector: 'app-sales-stat',
  templateUrl: './sales-stat.component.html',
  styleUrls: ['./sales-stat.component.css']
})
export class SalesStatComponent implements OnInit {
  
  public linechart1: Partial <ChartOptions> | any;
  public linechart2: Partial <ChartOptions> | any;

  line_graphs: any = [{"title":"Fast Casual"},{"title":"Casual Dine in"},{"title":"Fine Dining"},{"title":"Bar"},{"title":"Food Truck"},{"title":"Coffee/Café"}];
  stats_cards: any = [{"title":"# Deletes","values":[{"title":"iOS","value":"3,123","class":"color-red"},{"title":"Android","value":"2,233","class":"color-red"}]},{"title":"# App Shares","values":[{"title":"iOS","value":"12,457","class":"color-black"},{"title":"Android","value":"10,089","class":"color-green"}]},{"title":"# Deal Shares","values":[{"title":"iOS","value":"1,34,123","class":"color-black"},{"title":"Android","value":"1,62,233","class":"color-green"}]},{"title":"Click Spend","values":[{"title":"iOS","value":"1,34,123","class":"color-black"},{"title":"Android","value":"1,62,233","class":"color-green"}]},{"title":"Establishment","values":[{"title":"Verified","value":"23,123","class":"color-black"},{"title":"Non-Verified","value":"1,421","class":"color-green"}]},{"title":"Support Tickets","values":[{"title":"Raised","value":"23,123","class":"color-black"},{"title":"Resolved","value":"1,421","class":"color-green"}]},{"title":"Spin the Wheel","values":[{"title":"Total Spins","value":"23,123","class":"color-black"},{"title":"Total Rewards","value":"1,421","class":"color-green"}]}]
  
  constructor() {
    this.linechart1 = {
      series: [
        {
          name: "Current",
          data: [45, 50, 38, 24,45, 50, 38, 24,45, 50]
        },
        {
          name: "Prior",
          data: [35, 41, 62, 42,35, 41, 62, 42,35, 41]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
                    show: false
                },
      },
     colors: ["#3AAFC8","#FFB000"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: "smooth",
        dashArray: [0, 0, 0]
      },     
      legend: {
        show: false,
      },
      markers: {
        size: 3,
        shape : 'square',
        strokeDashArray: 1,
        hover: {
          sizeOffset: 1
        }
      },
      xaxis: {
       labels: {
          show: false,
      },
        numeric: [1,2,3,4,6,7,8,9,10],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val:any) {
                return val + " (mins)";
              }
            }
          },
          {
            title: {
              formatter: function(val:any) {
                return val + " (k)";
              }
            }
          },
          {
            title: {
              formatter: function(val:any) {
                return val;
              }
            }
          }
        ]
      },
      yaxis: {
                labels: {
                    show: true,
                    formatter: (value: any) => {
                        return value + 'K'
                    },
                },
            },
      
    };

    this.linechart2 = {
      series: [
        {
          name: "Current",
          data: [45, 50, 38, 24,45, 50, 38, 24,45, 50]
        },
        {
          name: "Prior",
          data: [35, 41, 62, 42,35, 41, 62, 42,35, 41]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
                    show: false
                },
      },
     colors: ["#25BE7D","#43A5CF"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: "smooth",
        dashArray: [0, 0, 0]
      },     
      legend: {
        show: false,
      },
      markers: {
        size: 3,
        shape : 'square',
        strokeDashArray: 1,
        hover: {
          sizeOffset: 1
        }
      },
      xaxis: {
       labels: {
          show: false,
      },
        numeric: [1,2,3,4,6,7,8,9,10],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val:any) {
                return val + " (k)";
              }
            }
          },
          {
            title: {
              formatter: function(val:any) {
                return val + " (k)";
              }
            }
          }
        ]
      },
      yaxis: {
                labels: {
                    show: true,
                    formatter: (value: any) => {
                        return value + 'K'
                    },
                },
            },
      
    };
   }

  ngOnInit(): void {
  }

}
