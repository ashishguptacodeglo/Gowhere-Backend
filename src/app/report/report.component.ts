import {Component,OnInit,ViewEncapsulation} from '@angular/core';
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
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class ReportComponent {
  
   
    
    current_page: any = "consumer_stats";
    constructor() {

    }
    ngOnInit(): void {

        
    }
    tabChange(current_page: any) {
        this.current_page = current_page;
    }
}