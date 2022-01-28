import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapse : boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  collapsenavbar(){
    this.collapse = !this.collapse; 
    this.dataService.sendData(this.collapse);
  }

}
