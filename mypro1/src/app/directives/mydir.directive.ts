import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMydir]'
})
export class MydirDirective {

  constructor(private _ele : ElementRef) {
      _ele.nativeElement.style.backgroundColor="blue";
   }


   @HostListener('click') demo(){
     this._ele.nativeElement.style.color="white";
   }
   @HostListener('dblclick') demo2(){
    //  console.log(this._ele.nativeElement.innerHTML);
    this._ele.nativeElement.innerHTML="INDORE";
     this._ele.nativeElement.style.border="2px solid red";
   }

}
