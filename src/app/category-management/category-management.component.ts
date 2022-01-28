import {  Component,  OnInit,ChangeDetectionStrategy,Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
})
export class CategoryManagementComponent implements OnInit {
  searchText: any;
  amenity_form_field : number = 1;
  sub_cats : number = 1;
  @Input('data') meals: string[] = [];
  page: number = 1
  current_page: any = "category";
  categories: any = [
    { id: 1,icon:'/assets/images/categories/happy_hours.png', name: "Happy Hours",sub_cat_count: 0, est_enrolled: 1452,},
    {id: 1,icon:'/assets/images/categories/game_day.png',name: "Game Day",sub_cat_count: 0,est_enrolled: 4231, },
    { id: 1, icon:'/assets/images/categories/restaurants.png',name: "Restaurants",sub_cat_count: 8,est_enrolled: 3121,},
    { id: 1, icon:'/assets/images/categories/bars.png',name: "Bar and Night Clubs",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/things_todo.png',name: "Things To do",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1,icon:'/assets/images/categories/saloon_spa.png',name: "Salon/Spa",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1,icon:'/assets/images/categories/health.png',name: "Health and Wellness",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
  ]; 
  amenities: any = [
    { id: 1,icon:'/assets/images/categories/happy_hours.png', name: "Happy Hours",sub_cat_count: 0, est_enrolled: 1452,},
    {id: 1,icon:'/assets/images/categories/game_day.png',name: "Game Day",sub_cat_count: 0,est_enrolled: 4231, },
    { id: 1,icon:'/assets/images/categories/happy_hours.png', name: "Happy Hours",sub_cat_count: 0, est_enrolled: 1452,},
    {id: 1,icon:'/assets/images/categories/game_day.png',name: "Game Day",sub_cat_count: 0,est_enrolled: 4231, },
    { id: 1, icon:'/assets/images/categories/restaurants.png',name: "Restaurants",sub_cat_count: 8,est_enrolled: 3121,},
    { id: 1, icon:'/assets/images/categories/bars.png',name: "Bar and Night Clubs",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/things_todo.png',name: "Things To do",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/restaurants.png',name: "Restaurants",sub_cat_count: 8,est_enrolled: 3121,},
    { id: 1,icon:'/assets/images/categories/health.png',name: "Health and Wellness",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/restaurants.png',name: "Restaurants",sub_cat_count: 8,est_enrolled: 3121,},
    { id: 1,icon:'/assets/images/categories/health.png',name: "Health and Wellness",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1,icon:'/assets/images/categories/saloon_spa.png',name: "Salon/Spa",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1,icon:'/assets/images/categories/health.png',name: "Health and Wellness",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
    { id: 1, icon:'/assets/images/categories/home_services.png',name: "Home & Professional",sub_cat_count: 0,est_enrolled: 1452,},
  ];
  page_prog: any = 'progress'
  

  constructor() {

    
  }


  ngOnInit(): void {

  }


  tabChange(current_page: any) {
      this.current_page = current_page;
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






  counterAmenity(i: number) {
     return new Array(this.amenity_form_field);
  }

  AddAmenityField(){
    this.amenity_form_field = this.amenity_form_field+1;
  }

  ModalClosedAmenity(){
    this.amenity_form_field = 1;
  } 

  RemoveAmenityField(){
    this.amenity_form_field = this.amenity_form_field-1;
  }


  
  statusChange(page: any) {
      this.page_prog = page;
  }


}
