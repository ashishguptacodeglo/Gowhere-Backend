import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendUserRoutingModule } from './backend-user-routing.module';
import { DataTablesModule } from "angular-datatables";

import { BackendUserComponent } from './backend-user.component';


@NgModule({
  declarations: [
    BackendUserComponent
  ],
  imports: [
    CommonModule,
    BackendUserRoutingModule,
    DataTablesModule
  ]
})
export class BackendUserModule { }
