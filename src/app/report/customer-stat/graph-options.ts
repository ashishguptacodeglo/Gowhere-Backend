export class GraphOptions {
	public static GenderGraphOptions :any = {
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
	public static DownLoadsGraphOptions :any = {
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


        public static EstEnrolOptions : any = {
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


}
