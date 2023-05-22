import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange'; // Замените на URL вашего выбранного API

  constructor(private http: HttpClient) { }

  getCurrencyRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
