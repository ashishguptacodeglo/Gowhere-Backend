import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establishment-info',
  templateUrl: './establishment-info.component.html',
  styleUrls: ['./establishment-info.component.css']
})
export class EstablishmentInfoComponent implements OnInit {
  searchText: any;
  page:any = "dashboard_new";
  page_prog:any= 'progress'
  constructor() { }

  ngOnInit(): void {
  }
  tabChange(page:any) {
    this.page = page;
 }
statusChange(page:any) {
  this.page_prog = page;
}
}
