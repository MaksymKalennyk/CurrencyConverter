import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyRate} from "../calculator/CurrencyRate";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  constructor(private http: HttpClient) { }

  getData(): Observable<CurrencyRate[]> {
    return this.http.get<CurrencyRate[]>(this.apiUrl);
  }
}
