import {  Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  searchText: any;
  sub_cats : number = 1;
  page: any = "category";
  categories: any = [
    { 
      id: 1, 
      icon:'/assets/images/categories/happy_hours.png',
      name: "Happy Hours",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/game_day.png',
      name: "Game Day",
      sub_cat_count: 0,
      est_enrolled: 4231,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/restaurants.png',
      name: "Restaurants",
      sub_cat_count: 8,
      est_enrolled: 3121,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/bars.png',
      name: "Bar and Night Clubs",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/things_todo.png',
      name: "Things To do",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/saloon_spa.png',
      name: "Salon/Spa",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/health.png',
      name: "Health and Wellness",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },{ 
      id: 1, 
      icon:'/assets/images/categories/home_services.png',
      name: "Home & Professional",
      sub_cat_count: 0,
      est_enrolled: 1452,
    },
  ];
  page_prog: any = 'progress'
  constructor() {}
  ngOnInit(): void {}
  tabChange(page: any) {
      this.page = page;
  }

  counter(i: number) {
    return new Array(this.sub_cats);
  }

  AddSubCatField(){
    this.sub_cats = this.sub_cats+1;
  } 

  ModalClosed(){
    this.sub_cats = 1;
  } 

  RemoveSubCatField(){
    this.sub_cats = this.sub_cats-1;
  }
  statusChange(page: any) {
      this.page_prog = page;
  }
}
