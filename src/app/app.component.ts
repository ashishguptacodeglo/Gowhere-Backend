import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menu : boolean = false;
  is_loggedin:boolean = window.localStorage.getItem('auth_token') ? true : false;	 
  
  constructor(private dataService: DataService) { 
    window.localStorage.setItem('base_url','http://54.160.93.94:5001/api/v1/');
    this.dataService.checklogin$.subscribe((trigger: any)=>{
      this.is_loggedin = trigger;
    });
  }
  title = 'gowhere-backend';
  ngOnInit(): void {

    
    this.dataService.data$
      .subscribe(
        message =>{
          this.menu = message;
        }
      );
  }
}
