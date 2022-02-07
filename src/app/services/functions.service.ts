import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

     getDaysInMonth(month:any, year:any) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
          days.push(new Date(date).getDate());
          date.setDate(date.getDate() + 1);
        }
        return days;
      }
      numberWithCommas(x:any) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

  constructor() { }
}
