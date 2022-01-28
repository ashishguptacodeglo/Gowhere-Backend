import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-deal-managements',
  templateUrl: './deal-managements.component.html',
  styleUrls: ['./deal-managements.component.css']
})
export class DealManagementsComponent implements OnInit {
  page:any = "dashboard";
  chart: any;
  constructor() { }

  ngOnInit(): void {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Data1','Data2'],
        datasets: [
          { 
            data: [55,45],
            backgroundColor: ['rgba(255, 0, 0, 1)','rgba(255, 0, 0, 0.1)'],
          },
        ]
      }
    });
  }
  tabChange(page:any) {
    this.page = page;
 }
}
