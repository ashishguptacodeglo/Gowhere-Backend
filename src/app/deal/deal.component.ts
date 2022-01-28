import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  page_banner:any = "image_libraryl";
  
  cities = [
    { id: 1, name: 'Take-Out' },
    { id: 2, name: 'Take-In' },
  ];

  selectedCity: any;

  Establishment = [
    { id: 1, name: 'Karen Marie Salon' },
    { id: 2, name: 'Karen Marie Salon' },
  ];

  selectedEstablishment: any;

  deal = [
    { id: 1, name: 'Take-Out' },
    { id: 2, name: 'Take-In' },
  ];

  selectedDeal: any;

  duration = [
    { id: 1, name: '1 hour' },
    { id: 2, name: '2 hour' },
  ];

  selectedDuration: any;

  count = [
    { id: 1, name: '1' },
    { id: 2, name: '2 ' },
  ];

  selectedCount: any;

  soft = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Coca ' },
  ];

  selectedSoft: any;
  
  library = [
    { id: 1, name: '1' },
    { id: 2, name: '2 ' },
  ];

  selectedLibrary: any;
 

  option='ajsdasidh';
 bbb='skdhkj';
 price='ksjchzjkc';
  constructor() { 
    
  }


  ngOnInit(): void {
  }
  bannerChange(page:any) {
    this.page_banner = page;
  }
}
