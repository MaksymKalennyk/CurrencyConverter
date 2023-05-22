import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  usdRate: number | undefined;
  eurRate: number | undefined;
  apiData: any;

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
    if (requiredDataUsd) {
      console.log(requiredDataUsd);
       this.usdRate = requiredDataUsd.rate;
      console.log(this.usdRate)
    }
    if (requiredDataEur) {
      console.log(requiredDataEur);
      this.eurRate = requiredDataEur.rate;
      console.log(this.eurRate)
    }
  }
}
