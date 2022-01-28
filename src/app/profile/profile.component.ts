import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  page:any = "dashboard";
  page_new:any= 'menu'
  status = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Passive' },
  ];

  selectedStatus: any;
  name = 'Angular 5';
  dataList: Array<any> = [];
  dataform: Array<any> = [];
  barlist: Array<any> = [];
  barforms: Array<any> = [];
 lunchlist: Array<any> = [];
 lunchforms: Array<any> = [];
 dinnerlist: Array<any> = [];
 dinnerforms: Array<any> = [];
 happylist: Array<any> = [];
 happyforms: Array<any> = [];
 tagsforms: Array<any> = [];
//  for radio button
radioTitle: string;
radioItems0: Array<string>;
radioItems: Array<string>;
radioItems1: Array<string>;
radioItems2: Array<string>;
radioItems3: Array<string>;
radioItems4: Array<string>;
radioItems5: Array<string>;
model   = {option: 'option5'};
model_service   = {option: 'option5'};
model_food   = {option: 'option6'};
model_alcohol   = {option: 'option6'};
model_seat   = {option: 'option6'};
model_pay   = {option: 'option6'};
constructor() {  this.dataList = [
    { code: 1, name: "From" },
    { code: 2, name: "2" },
    { code: 3, name: "3" }
  ];
  this.dataform = [
    { code: 1, name: 'To' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.barlist = [
    { code: 1, name: 'From' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.barforms = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.lunchlist = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.lunchforms = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.dinnerlist = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.dinnerforms = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.happylist = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.happyforms = [
    { code: 1, name: 'TO' },
    { code: 2, name: '2' },
    { code: 3, name: '3' },
  ];
  this.tagsforms = [
    { code: 1, name: 'Foods & Drinks' },
    { code: 2, name: 'Beer and Wine only' },
    { code: 3, name: 'Pre Fixed' },
  ];
  this.radioTitle = 'Radio Button in Angular';
  this.radioItems0 = ['Establishment is open for business', 'This place is opening soon', 'Food Truck','Bar','Night Club'];
  this.radioItems = ['Restaurants', 'Ghost Kitchen', 'Food Truck','Bar','Night Club'];
  this.radioItems1 = ['Breakfast', 'Lunch', 'Dinner','Cafe','Nightlife'];
  this.radioItems2 = ['Italian', 'Thai', 'Coffee','Raw','Organic','Pre Fixed'];
  this.radioItems3 = ['Beer and Wine only', 'No Alcohol ', 'Full Bar'];
  this.radioItems4 = ['Seating Available', 'No Seating Available ', 'Indoor Seating','Outdoor Seating'];
  this.radioItems5 = ['Credit/Debit Card', 'Cash', 'PayPal','Apple Pay'];
 }


  
  ngOnInit(): void {
  
  }
  tabChange(page:any) {
    this.page = page;
 }
 menuchange(page:any) {
  this.page_new = page;
}
}
