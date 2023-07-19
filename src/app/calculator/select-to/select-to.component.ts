import {Component, Input} from '@angular/core';
import {Calculator} from "../Calculator";
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-select-to',
  templateUrl: './select-to.component.html',
  styleUrls: ['./select-to.component.css'],
  providers: []
})
export class SelectToComponent {
  @Input() calculator!: Calculator;
  @Input() selectItems!: any;
  currencyUSD = "USD";
  currencyEUR = "EUR";
  currencyUAH = "UAH";

  constructor(public calculatorService: CalculatorService) {
  }

}
