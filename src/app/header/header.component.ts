import { Component } from '@angular/core';
import {ApiService} from "./ApiService";
import {CurrencyConversionService} from "../currency-conversion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiService, CurrencyConversionService]
})
export class HeaderComponent {
  usdRate: number = 0;
  eurRate: number = 0;
  apiData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getData().subscribe(data => {
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
    }
  }
}
