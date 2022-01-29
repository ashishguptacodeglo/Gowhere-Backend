import {  Component,  OnInit,ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css'],
})
export class CategoryManagementComponent implements OnInit {
  searchText: any;
  isCat: boolean = true;
  isSubCat: boolean = false;
  sub_cats : number = 1;
  amenity_form_field : number = 1;
  payment_form_field : number = 0;
  category : any ;
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
  payments: any = [
    { id: 1, name: "Debit/Credit Card"},
    { id: 1, name: "Cash"},
    { id: 1, name: "PayPal"},
    { id: 1, name: "Apple Pay"},
  ];  
  subcategories: any = [
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
      if(current_page == 'category'){
        this.isCat = true;
      }else{
           this.isCat = false;
      }
       this.isSubCat = false;
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


  showSubCategories(category : any,cat_id:number){
    this.current_page = 'category';
    this.category = category;
    this.isSubCat = true;
     this.isCat = false;
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







  counterPaymentFields(i: number) {
     return new Array(this.payment_form_field);
  }

  AddPaymentsField(){
  this.payment_form_field = this.payment_form_field+1;
  }
  RemovePaymentsField(){
  this.payment_form_field = this.payment_form_field-1;
  }
  ModalClosedPayments(){
  this.payment_form_field = 0;
  } 
  
  statusChange(page: any) {
      this.page_prog = page;
  }


}
