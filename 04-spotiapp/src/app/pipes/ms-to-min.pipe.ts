import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msToMin'
})
export class MsToMinPipe implements PipeTransform {

  transform(value: number): string {
    let min = value/60000;
    let seg = Math.floor((min % 1)*60);
    let segundos = seg < 10 ? `0${seg}`: `${seg}`;
    return `${Math.floor(min)}:${segundos}`;
  }

}
