import {Injectable, Input} from '@angular/core';
import {ApiService} from "./header/ApiService";
import {Calculator} from "./calculator/Calculator";
import {CurrencyRate} from "./calculator/CurrencyRate";
import {ExchangeRate} from "./calculator/ExchangeRate";

@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  @Input() calculator!: Calculator;
  @Input() currencyRate!: CurrencyRate;
  private exchangeRates: ExchangeRate = {};
  usdRate: number = 0;
  eurRate: number = 0;
  apiData: any;

  constructor(private apiService: ApiService) {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getData().subscribe(data => {
      this.apiData = data.map((item: CurrencyRate) => {
        return <CurrencyRate>{
          r030: item.r030,
          txt: item.txt,
          rate: item.rate,
          cc: item.cc
        };
      });
      console.log(this.apiData);
      this.extractData(this.apiData);
    });
  }

  extractData(rates: CurrencyRate[]){
    rates.forEach(currencyRate => {
      if (currencyRate.cc == "USD") {
        this.usdRate = currencyRate.rate;
      }
      if (currencyRate.cc == "EUR") {
        this.eurRate = currencyRate.rate;
      }
    });
    console.log(this.eurRate);
    console.log(this.usdRate);
  }

  initializeExchangeRates() {

    /*if (currencyFrom == currencyTo){
      return 1;
    }*/
    this.exchangeRates = {
      'EUR-USD': this.eurRate / this.usdRate,
      'USD-EUR': this.usdRate / this.eurRate,
      'EUR-UAH': this.eurRate,
      'UAH-EUR': 1 / this.eurRate,
      'USD-UAH': this.usdRate,
      'UAH-USD': 1 / this.usdRate,
      'UAH-UAH': 1,
      'USD-USD': 1,
      'EUR-EUR': 1,
    };
  }

  calculateInputFrom(calculator: Calculator) {
    this.initializeExchangeRates();
    const rateKey = `${calculator.currencyFrom}-${calculator.currencyTo}`;
    const rate = this.exchangeRates[rateKey];
    calculator.inputTo = 0;

    if (rate && !isNaN(rate)) {
      calculator.inputTo = calculator.inputFrom * rate;
      calculator.inputTo = +calculator.inputTo.toFixed(2);
    }
  }

  calculateInputTo(calculator: Calculator) {
    this.initializeExchangeRates();
    const rateKey = `${calculator.currencyTo}-${calculator.currencyFrom}`;
    const rate = this.exchangeRates[rateKey];
    calculator.inputFrom = 0;

    if (rate && !isNaN(rate)) {
      calculator.inputFrom = calculator.inputTo * rate;
      calculator.inputFrom = +calculator.inputFrom.toFixed(2);
    }
  }
}
