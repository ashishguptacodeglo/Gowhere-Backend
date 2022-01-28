import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendUserComponent } from './backend-user.component';

const routes: Routes = [{ path: '', component: BackendUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendUserRoutingModule { }
