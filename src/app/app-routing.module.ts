import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { DealComponent } from './deal/deal.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'deal',component:DealComponent, canActivate: [AuthService]},
  {path:'profile',component:ProfileComponent, canActivate: [AuthService]},
  {path:'login',component:LoginComponent, canActivate: [AuthService]},
  {path:'newitemcomponent',component:NewItemComponent, canActivate: [AuthService]},
  { path: 'establishment-info', canActivate: [AuthService], loadChildren: () => import('./establishment-info/establishment-info.module').then(m => m.EstablishmentInfoModule) },
  { path: 'deal-management', canActivate: [AuthService], loadChildren: () => import('./deal-managements/deal-managements.module').then(m => m.DealManagementsModule) },
  { path: 'establishment-support', canActivate: [AuthService], loadChildren: () => import('./estabishment-support/estabishment-support.module').then(m => m.EstabishmentSupportModule) },
  { path: 'save-plate', canActivate: [AuthService], loadChildren: () => import('./save-plate/save-plate.module').then(m => m.SavePlateModule) },
  { path: 'backend-user', canActivate: [AuthService], loadChildren: () => import('./backend-user/backend-user.module').then(m => m.BackendUserModule) },
  { path: 'transaction', canActivate: [AuthService], loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'rating-reviews', canActivate: [AuthService], loadChildren: () => import('./rating-reviews/rating-reviews.module').then(m => m.RatingReviewsModule) },
  { path: 'report', canActivate: [AuthService], loadChildren: () => import('./report/report.module').then(m => m.ReportModule) },
  { path: 'category-Management',canActivate: [AuthService],  loadChildren: () => import('./category-management/category-management.module').then(m => m.CategoryManagementModule) },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
