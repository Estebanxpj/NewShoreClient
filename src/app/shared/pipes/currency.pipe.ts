import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, isUSD: boolean): unknown {

    let en =  isUSD ? 'en-US' : 'en-CO';

    var formatter = new Intl.NumberFormat(en, {
      style: 'currency',
      currency: isUSD ? 'USD' : 'COL'
    });

    value = isUSD ? (value * 1) : (value * 4000);
    
    return formatter.format(value);
  }

}
