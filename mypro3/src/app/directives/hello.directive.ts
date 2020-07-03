import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private _ele : ElementRef) {
    _ele.nativeElement.style.backgroundColor="blue";
   }
   @HostListener('mouseover') demo(){
     this._ele.nativeElement.style.backgroundColor = "red";
   }

}
