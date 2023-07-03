import { CurrencyService } from 'src/app/core/services/currencyService';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencySelected: string): unknown {

    const currencyResult = CurrencyService.getCurrency(currencySelected);

    var formatter = new Intl.NumberFormat(currencyResult.format, {
      style: 'currency',
      currency: currencyResult.currency
    });

    value = value * currencyResult.amount;
    
    return formatter.format(value);
  }
}
