import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabishmentSupportRoutingModule } from './estabishment-support-routing.module';
import { DataTablesModule } from "angular-datatables";

import { EstabishmentSupportComponent } from './estabishment-support.component';


@NgModule({
  declarations: [
    EstabishmentSupportComponent
  ],
  imports: [
    CommonModule,
    EstabishmentSupportRoutingModule,
    DataTablesModule
  ]
})
export class EstabishmentSupportModule { }
