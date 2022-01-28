import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePlateComponent } from './save-plate.component';

const routes: Routes = [{ path: '', component: SavePlateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SavePlateRoutingModule { }
