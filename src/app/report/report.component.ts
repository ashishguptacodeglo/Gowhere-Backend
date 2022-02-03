import {Component,OnInit,ViewChild} from '@angular/core';
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
    styleUrls: ['./report.component.css']
})
export class ReportComponent {
    public stats_area_graph: Partial <ChartOptions> | any;
    public stats_bar_graph1: Partial <ChartOptions> | any;
    public stats_bar_graph2: Partial <ChartOptions> | any;
    public deal_type_by_restaurents1: Partial <ChartOptions> | any;
    public deal_type_by_restaurents2: Partial <ChartOptions> | any;
    public deal_type_by_restaurents3: Partial <ChartOptions> | any;
    
    current_page: any = "consumer_stats";
    stats_cards: any = [{
        title: "# Deletes",
        values: [{
            title: "iOS",
            value: "3,123",
            class: 'color-red'
        }, {
            title: "Android",
            value: "2,233",
            class: 'color-red'
        }]
    }, {
        title: "# App Shares",
        values: [{
            title: "iOS",
            value: "12,457",
            class: 'color-black'
        }, {
            title: "Android",
            value: "10,089",
            class: 'color-green'
        }]
    }, {
        title: "# Deal Shares",
        values: [{
            title: "iOS",
            value: "1,34,123",
            class: 'color-black'
        }, {
            title: "Android",
            value: "1,62,233",
            class: 'color-green'
        }]
    }, {
        title: "Click Spend",
        values: [{
            title: "iOS",
            value: "1,34,123",
            class: 'color-black'
        }, {
            title: "Android",
            value: "1,62,233",
            class: 'color-green'
        }]
    }, {
        title: "Establishment",
        values: [{
            title: "Verified",
            value: "23,123",
            class: 'color-black'
        }, {
            title: "Non-Verified",
            value: "1,421",
            class: 'color-green'
        }]
    }, {
        title: "Support Tickets",
        values: [{
            title: "Raised",
            value: "23,123",
            class: 'color-black'
        }, {
            title: "Resolved",
            value: "1,421",
            class: 'color-green'
        }]
    }, {
        title: "Spin the Wheel",
        values: [{
            title: "Total Spins",
            value: "23,123",
            class: 'color-black'
        }, {
            title: "Total Rewards",
            value: "1,421",
            class: 'color-green'
        }]
    }]
    constructor() {
        this.stats_area_graph = {
            series: [{
                name: "Downloads",
                fontFamily: 'Gordita',
                data: [20, 90, 100, 90, 80, 47, 70, 65, 15, 36, 85, 90, 90, 80, 47, 89],
            }],
            chart: {
                type: "area",
                height: 350,
                background: '#fff',
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                colors: ['#ef771f'],
                width: 0,
            },
            fill: {
                type: "solid",
                colors: ['#ef771f']
            },
            title: {
                text: "Downloads",
                align: "left",
                style: {
                    fontFamily: 'Gordita',
                },
            },
            labels: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
            xaxis: {
                type: "category",
                title: {
                    text: 'Dates',
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Gordita',
                        fontWeight: 600,
                    },
                },
            },
            yaxis: {
                opposite: false
            },
            legend: {
                horizontalAlign: "left"
            },
        };
        this.stats_bar_graph1 = {
            series: [{
                name: "Male",
                data: [44, 55, 57, 56]
            }, {
                name: "Female",
                data: [76, 85, 101, 98]
            }],
            chart: {
                type: "bar",
                height: 340,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "25%",
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                position: "top",
                markers: {
                    fillColors: ['#0B9ABA', '#B74C1E'],
                    radius: 12,
                },
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['transparent']
            },
            xaxis: {
                title: {
                    text: "Region"
                },
                categories: ["East", "West", "North", "South", ]
            },
            fill: {
                type: "solid",
                colors: ['#0B9ABA', '#B74C1E']
            },
            yaxis: {
                labels: {
                    show: true,
                    formatter: (value: any) => {
                        return value + 'K'
                    },
                },
            }
        };
        this.stats_bar_graph2 = {
            series: [{
                name: "Enquiry Form",
                data: [44, 55, 57, 56]
            }, {
                name: "Missed Call",
                data: [76, 85, 101, 98]
            }, {
                name: "Request Call",
                data: [60, 20, 45, 80]
            }],
            chart: {
                type: "bar",
                height: 340,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "33%",
                }
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                position: "top",
                markers: {
                    fillColors: ['#28A193', '#B71E1E', '#1E73B7'],
                    radius: 12,
                },
            },
            stroke: {
                show: true,
                width: 1,
                colors: ['transparent']
            },
            xaxis: {
                title: {
                    text: "Region"
                },
                categories: ["East", "West", "North", "South", ]
            },
            fill: {
                type: "solid",
                colors: ['#28A193', '#B71E1E', '#1E73B7']
            },
            yaxis: {
                labels: {
                    show: true,
                    formatter: (value: any) => {
                        return value + 'K'
                    },
                },
            }
        };
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
    tabChange(current_page: any) {
        this.current_page = current_page;
    }
}