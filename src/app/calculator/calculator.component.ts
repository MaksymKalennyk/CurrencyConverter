import {Component, inject} from '@angular/core';
import {Calculator} from "./Calculator";
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculatorService: CalculatorService = inject(CalculatorService);
  calculator: Calculator = {
    currencyTo: "USD",
    currencyFrom: "UAH",
    inputTo: 0,
    inputFrom: 0,
  };
  selectItems: any = ["USD", "UAH", "EUR"];

}
