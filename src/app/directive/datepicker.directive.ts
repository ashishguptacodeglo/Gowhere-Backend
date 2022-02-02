import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective {

  constructor(private el: ElementRef) { 
       this.el.nativeElement.style.backgroundColor = 'yellow';
    // console.log(el);
  }

}
