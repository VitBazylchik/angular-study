import { AbstractControl } from '@angular/forms';

export function durationValidator(control: AbstractControl): {[key: string]: any} {
  const regExp = /^\d+$/g;
  const forbidden = regExp.test(control.value);
  return !forbidden ? {'date' : {value: control.value}} : null;
}