import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryManagementComponent } from './category-management.component';


@NgModule({
  declarations: [
    CategoryManagementComponent
  ],
  imports: [
    CommonModule,
    CategoryManagementRoutingModule
  ]
})
export class CategoryManagementModule { }
