import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingReviewsComponent } from './rating-reviews.component';

const routes: Routes = [{ path: '', component: RatingReviewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingReviewsRoutingModule { }
