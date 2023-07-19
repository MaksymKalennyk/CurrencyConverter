import {Component, Input} from '@angular/core';
import {Calculator} from "../Calculator";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-input-from',
  templateUrl: './input-from.component.html',
  styleUrls: ['./input-from.component.css'],
  providers: []
})
export class InputFromComponent {
  @Input() calculator!: Calculator;

  constructor(public calculatorService: CalculatorService) {
  }

 /* convertCurrencyFirst() {
    this.currencyConversionService.setInputFrom(this.inputFrom);
    this.currencyConversionService.calculateInputFrom();
  }*/

/*  convertCurrencyFirst(){
    this.currencyConversionService.setInputTo();
  }*/
}
