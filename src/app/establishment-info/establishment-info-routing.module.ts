import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentInfoComponent } from './establishment-info.component';

const routes: Routes = [{ path: '', component: EstablishmentInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstablishmentInfoRoutingModule { }
