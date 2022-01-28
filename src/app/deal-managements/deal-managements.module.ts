import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DealManagementsRoutingModule } from './deal-managements-routing.module';
import { DataTablesModule } from "angular-datatables";

import { DealManagementsComponent } from './deal-managements.component';


@NgModule({
  declarations: [
    DealManagementsComponent
  ],
  imports: [
    CommonModule,
    DealManagementsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class DealManagementsModule { }
