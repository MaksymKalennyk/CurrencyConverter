import {Component, Input} from '@angular/core';
import {Calculator} from "../Calculator";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-input-to',
  templateUrl: './input-to.component.html',
  styleUrls: ['./input-to.component.css'],
  providers: []
})
export class InputToComponent {
  @Input() calculator!: Calculator;

  constructor(public calculatorService: CalculatorService) {
  }

/*  convertCurrencySecond() {
    this.currencyConversionService.setInputTo(this.inputTo);
    this.currencyConversionService.calculateInputTo();
  }*/
/*  convertCurrencySecond(){
    this.currencyConversionService.setInputFrom();
  }*/
}
