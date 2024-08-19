import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[my-directive]'
})
export class MyOwnDirectiveDirective {

  @HostBinding('style.backgroundColor') bgColor : string | null = 'coral'


  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.bgColor = 'yellow';
  }

 /*  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.bgColor = 'lightgreen';
  } */


  @Input() changeOnLeave = false

  @HostListener('mouseleave')
  onMouseLeave(): void {
    console.log("leave");
    if (this.changeOnLeave) {
      this.bgColor = "#d3d3d3";
    }
  }



  constructor() { }

}
