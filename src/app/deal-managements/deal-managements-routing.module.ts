import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealManagementsComponent } from './deal-managements.component';

const routes: Routes = [{ path: '', component: DealManagementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealManagementsRoutingModule { }
