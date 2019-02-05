import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoTelefone'
})
export class TipoTelefonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 0 || value === '0') {
      return 'Celular';
    }
    return 'Fixo';
  }

}
