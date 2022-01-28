import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstabishmentSupportComponent } from './estabishment-support.component';

const routes: Routes = [{ path: '', component: EstabishmentSupportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstabishmentSupportRoutingModule { }
