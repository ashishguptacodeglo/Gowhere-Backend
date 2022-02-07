import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { CustomerStatComponent } from './customer-stat/customer-stat.component';
import { DealTypeRestaurentsStatsComponent } from './deal-type-restaurents-stats/deal-type-restaurents-stats.component';
import { SalesStatComponent } from './sales-stat/sales-stat.component';
import { HelpTicketsComponent } from './help-tickets/help-tickets.component';
import { DealTypeStatComponent } from './deal-type-stat/deal-type-stat.component';


@NgModule({
  declarations: [
    ReportComponent,
    CustomerStatComponent,
    DealTypeRestaurentsStatsComponent,
    SalesStatComponent,
    HelpTicketsComponent,
    DealTypeStatComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    NgApexchartsModule
  ]
})
export class ReportModule { }
