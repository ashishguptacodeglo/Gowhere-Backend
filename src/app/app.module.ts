import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataTablesModule } from "angular-datatables";
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgOtpInputModule } from  'ng-otp-input';
import {MatProgressBarModule} from '@angular/material/progress-bar';



import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { DealComponent } from './deal/deal.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NewItemComponent } from './new-item/new-item.component';
import { HttpInterceptorInterceptor } from './services/http-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DealComponent,
    ProfileComponent,
    LoginComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    DataTablesModule,
    AngularEditorModule,
    HttpClientModule,
    MatTabsModule,
    NgSelectModule,
    FormsModule, 
    ReactiveFormsModule,
    NgOtpInputModule,
    MatProgressBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
