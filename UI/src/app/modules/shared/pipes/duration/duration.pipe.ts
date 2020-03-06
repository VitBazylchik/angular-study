import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number | string): string {
    if (!value) {
      return '0min';
    }
    const hours = Math.floor(+value / 60);
    const hh = hours === 0 ? '' : `${hours}h`;
    const calcMin = +value % 60;
    const mm = calcMin < 10 ? `0${calcMin}` : calcMin;
    return `${hh} ${mm}min`;
  }

}
