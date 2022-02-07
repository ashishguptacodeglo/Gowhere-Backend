import { Component, OnInit  } from '@angular/core';

import {ChartComponent, ApexAxisChartSeries,ApexChart, ApexXAxis,ApexDataLabels,ApexStroke,ApexYAxis,ApexTitleSubtitle,ApexLegend,ApexFill,ApexPlotOptions,ApexTooltip,ApexResponsive} from "ng-apexcharts";

import{ States } from '../../common/states';
import{ GraphOptions } from './graph-options';
import{ FunctionsService } from '../../services/functions.service';

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
  selector: 'app-customer-stat',
  templateUrl: './customer-stat.component.html',
  styleUrls: ['./customer-stat.component.css']
})

export class CustomerStatComponent {
    public DownLoadsGraph: Partial <ChartOptions> | any;
    public GenderGraph: Partial <ChartOptions> | any;
    public EstEnrolOptions: Partial <ChartOptions> | any;


    stats_cards: any = [{"title":"# Deletes","values":[{"title":"iOS","value":"3,123","class":"color-red"},{"title":"Android","value":"2,233","class":"color-red"}]},{"title":"# App Shares","values":[{"title":"iOS","value":"12,457","class":"color-black"},{"title":"Android","value":"10,089","class":"color-green"}]},{"title":"# Deal Shares","values":[{"title":"iOS","value":"1,34,123","class":"color-black"},{"title":"Android","value":"1,62,233","class":"color-green"}]},{"title":"Click Spend","values":[{"title":"iOS","value":"1,34,123","class":"color-black"},{"title":"Android","value":"1,62,233","class":"color-green"}]},{"title":"Establishment","values":[{"title":"Verified","value":"23,123","class":"color-black"},{"title":"Non-Verified","value":"1,421","class":"color-green"}]},{"title":"Support Tickets","values":[{"title":"Raised","value":"23,123","class":"color-black"},{"title":"Resolved","value":"1,421","class":"color-green"}]},{"title":"Spin the Wheel","values":[{"title":"Total Spins","value":"23,123","class":"color-black"},{"title":"Total Rewards","value":"1,421","class":"color-green"}]}]
    statesList :any = [];
    statesObject : any = States.OnlyStates;
    CurrentState : any;
    citiesList : any;
    CurrentDay : any = new Date();
    DownLoads : any = {
        "ios" : {
            "total" : 1500,
            "male" : 800,
            "female" : 700,
        },
        "android" : {
            "total" : 2835,
            "male" : 2300,
            "female" : 500
        },

    };

    
    constructor(public globalFunction : FunctionsService) {

        for(var state in this.statesObject){
            this.statesList.push({code:state,name:this.statesObject[state]});
        }
        this.CurrentState = this.statesList[0].name;
        this.citiesList = States.StatesWithCities[this.CurrentState].sort();

        this.DownLoadsGraph = GraphOptions.DownLoadsGraphOptions;

        var totalDownloads = 0;
        for(var user in this.DownLoads){
            this.DownLoads[user].malepercent = parseFloat(((100 * this.DownLoads[user].male)/this.DownLoads[user].total).toFixed(2));
            this.DownLoads[user].femalepercent = 100 - this.DownLoads[user].malepercent;
            totalDownloads = totalDownloads + this.DownLoads[user].total;
        }
        this.DownLoads.total = totalDownloads;
        console.log(this.DownLoads);

        var dates = globalFunction.getDaysInMonth(this.CurrentDay.getMonth(),this.CurrentDay.getFullYear());
        const odds = dates.filter(number => {
          return number % 2 !== 0;
        });
        this.DownLoadsGraph.labels = odds;
        this.DownLoadsGraph.series[0].data = Array.from({length: odds.length}, () => Math.floor(Math.random() * 150));


        this.GenderGraph = GraphOptions.GenderGraphOptions;

        this.EstEnrolOptions = GraphOptions.EstEnrolOptions;
    }

    StateChange (event: any): void {
        this.CurrentState = event.target.value;
        if(States.StatesWithCities[event.target.value]){
            this.citiesList = States.StatesWithCities[event.target.value].sort();
        }else{
            this.citiesList = [];
        }
    }

  
    ngOnInit(): void {

        
    }
   
}
