import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {

  radioItems: Array<string>;
  model = { option: 'option3' };
  Category = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Passive' },
  ];

  selectedCategory: any;
  size = [
    { id: 1, name: 'small' },
    { id: 2, name: 'medium' },
    { id: 2, name: 'Large' },
  ];

  selectedSize: any;
  status = [
    { id: 1, name: 'Active' },
    { id: 2, name: 'Close' },
   
  ];

  selectedStatus: any;
  constructor() {
    this.radioItems = ['Yes', 'No'];
   }

  ngOnInit(): void {
  }

}
