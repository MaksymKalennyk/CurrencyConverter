import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const allowedKeys = [8, 9, 27, 13, 46];
    const key = event.keyCode || event.which;
    const isAllowed = allowedKeys.indexOf(key) !== -1;

    if (!isAllowed && !this.isNumberKey(key)) {
      event.preventDefault();
    }
  }

  private isNumberKey(key: number): boolean {
    return /[0-9]/.test(String.fromCharCode(key));
  }

}
