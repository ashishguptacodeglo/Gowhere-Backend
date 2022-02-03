import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  
  current_page: any = "scheduled";
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
  
  page_prog: any = 'progress'
  

  constructor() {

    
  }


  ngOnInit(): void {

  }


  tabChange(current_page: any) {
      this.current_page = current_page;
     
  }

 

}
