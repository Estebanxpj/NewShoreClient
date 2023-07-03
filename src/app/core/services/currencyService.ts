import { Injectable } from '@angular/core';
import { CurrencyMock as currencyMock } from '../mocks/currency.mocks';

type currencyType = {
  format: string;
  currency: string;
  amount: number;
};

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor() {}

  static getCurrency(currencySelected: string): currencyType {
    return currencyMock.find(
      (item) => item.currency === currencySelected
    ) as currencyType;
  }
}
