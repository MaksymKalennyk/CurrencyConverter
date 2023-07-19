import {Injectable, Input} from '@angular/core';
import {CurrencyConversionService} from "../currency-conversion.service";
import {CurrencyRate} from "./CurrencyRate";

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {
  @Input() currencyRate!: CurrencyRate;
  usdRate: number = 0;
  eurRate: number = 0;

  constructor(private currencyConversionService: CurrencyConversionService) {
  }

  ngOnInit(){}

  extractData(){
    this.currencyConversionService.apiData.forEach((currencyRate: { id: number; rate: number}) => {
      if (currencyRate.id === 840) {
        this.usdRate = currencyRate.rate;
      }
      if (currencyRate.id === 978) {
        this.eurRate = currencyRate.rate;
      }
    });
  }
  
}
