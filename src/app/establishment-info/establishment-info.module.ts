import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EstablishmentInfoRoutingModule } from './establishment-info-routing.module';
import { DataTablesModule } from "angular-datatables";

import { EstablishmentInfoComponent } from './establishment-info.component';


@NgModule({
  declarations: [
    EstablishmentInfoComponent
  ],
  imports: [
    CommonModule,
    EstablishmentInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
  ]
})
export class EstablishmentInfoModule { }
