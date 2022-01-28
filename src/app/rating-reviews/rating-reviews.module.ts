import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingReviewsRoutingModule } from './rating-reviews-routing.module';
import { RatingReviewsComponent } from './rating-reviews.component';


@NgModule({
  declarations: [
    RatingReviewsComponent
  ],
  imports: [
    CommonModule,
    RatingReviewsRoutingModule
  ]
})
export class RatingReviewsModule { }
