import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent {
  usdRate: number = 0;
  eurRate: number = 0;
  apiData: any;
  currencyUSD = "USD";
  currencyEUR = "EUR";
  currencyUAH = "UAH";
  currencyFrom: string = 'UAH';
  currencyTo: string = 'USD';
  inputFrom: number = 0;
  inputTo: number = 0;
  exchangeRates: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    const apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

    this.http.get(apiUrl).subscribe(data => {
      this.apiData = data;
      this.extractData();
    });
  }

  extractData() {
    const requiredDataUsd = this.apiData.find((item: { cc: string; }) => item.cc === 'USD');
    const requiredDataEur = this.apiData.find((item: { cc: string; }) => item.cc === 'EUR');

    if (requiredDataUsd && requiredDataEur) {
      this.usdRate = +requiredDataUsd.rate.toFixed(2);
      this.eurRate = +requiredDataEur.rate.toFixed(2);
      this.initializeExchangeRates();
    }
  }
  initializeExchangeRates() {
    this.exchangeRates = {
      'EUR-USD': this.eurRate / this.usdRate,
      'USD-EUR': 1 / (this.eurRate / this.usdRate),
      'EUR-UAH': this.eurRate,
      'UAH-EUR': 1 / this.eurRate,
      'USD-UAH': this.usdRate,
      'UAH-USD': 1 / this.usdRate,
      'UAH-UAH': 1,
      'USD-USD': 1,
      'EUR-EUR': 1,
    };
  }

  convertCurrencyFirst() {
    const rateKey = `${this.currencyFrom}-${this.currencyTo}`;
    const rate = this.exchangeRates[rateKey];
    this.inputTo = 0;

    if (rate && !isNaN(rate)) {
      this.inputTo = this.inputFrom * rate;
      this.inputTo = +this.inputTo.toFixed(2);
    }
  }
  convertCurrencySecond() {
    const rateKey = `${this.currencyTo}-${this.currencyFrom}`;
    const rate = this.exchangeRates[rateKey];
    this.inputFrom = 0;

    if (rate && !isNaN(rate)) {
      this.inputFrom = this.inputTo * rate;
      this.inputFrom = +this.inputFrom.toFixed(2);
    }
  }
}
