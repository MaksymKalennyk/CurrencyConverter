import {Component, Input} from '@angular/core';
import {CurrencyConversionService} from "../../currency-conversion.service";
import {Calculator} from "../Calculator";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-select-from',
  templateUrl: './select-from.component.html',
  styleUrls: ['./select-from.component.css'],
  providers: [CurrencyConversionService]
})
export class SelectFromComponent {
  @Input() calculator!: Calculator;
  @Input() selectItems!: any;

  constructor(public calculatorService: CalculatorService) {

  }

}
