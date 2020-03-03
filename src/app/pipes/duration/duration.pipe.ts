import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const calcMin = value % 60;
    const min = calcMin < 10 ? `0${calcMin}` : calcMin;
    return `${hours}h ${min}min`;
  }

}
