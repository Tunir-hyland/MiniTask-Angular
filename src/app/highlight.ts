import {
  Directive,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() appHighlight = false;

  @HostBinding('style.backgroundColor')
  get backgroundColor() {
    return this.appHighlight ? 'rgba(16, 185, 129, 0.08)' : 'transparent';
  }

  @HostBinding('style.transform')
  transform = 'scale(1)';

  @HostBinding('style.transition')
  transition = '0.3s';

  @HostBinding('style.cursor')
  cursor = 'pointer';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'scale(1.03)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
  }

}