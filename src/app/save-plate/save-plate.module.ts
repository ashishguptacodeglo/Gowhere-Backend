import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { SavePlateRoutingModule } from './save-plate-routing.module';
import { SavePlateComponent } from './save-plate.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SavePlateComponent
  ],
  imports: [
    CommonModule,
    SavePlateRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SavePlateModule { }
