import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl): {[key: string]: any} {
  const regExp = /\d{2}[\.\/]\d{2}[\.\/]\d{4}/;
  const forbidden = regExp.test(control.value);
  return !forbidden ? {'date' : {value: control.value}} : null;
}