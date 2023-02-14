import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {
    /* let pass:string = '';
    for (let i = 0; i < value.length; i++) {
      pass += '*';
    }
    return activar ? pass : value; */

    //FORMA CORTA
    return activar ? '*'.repeat(value.length) : value;
  }

}
