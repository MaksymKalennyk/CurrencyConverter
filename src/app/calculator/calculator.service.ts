import { Injectable } from '@angular/core';
import {CurrencyConversionService} from "../currency-conversion.service";
import {Calculator} from "./Calculator";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private currencyConversionService: CurrencyConversionService) { }

  selectFrom(calculator: Calculator) {
    this.currencyConversionService.calculateInputFrom(calculator);
  }

  selectTo(calculator: Calculator) {
    this.currencyConversionService.calculateInputTo(calculator);
  }

  convertCurrencyFrom(calculator: Calculator){
    this.currencyConversionService.calculateInputTo(calculator);
  }
  convertCurrencyTo(calculator: Calculator){
    this.currencyConversionService.calculateInputFrom(calculator);
  }
}
