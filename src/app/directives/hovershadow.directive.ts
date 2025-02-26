import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHovershadow]'
})
export class HovershadowDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '5px 5px 15px rgba(0, 0, 0, 0.3)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease-in-out');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
  }
}
