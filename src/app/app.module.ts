import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyComponent } from './currency/currency.component';
import {FormsModule} from "@angular/forms";
import { OnlyNumberDirective } from './only-number.directive';
import { HeaderComponent } from './header/header.component';
import { SelectFromComponent } from './calculator/select-from/select-from.component';
import { InputFromComponent } from './calculator/input-from/input-from.component';
import { SelectToComponent } from './calculator/select-to/select-to.component';
import { InputToComponent } from './calculator/input-to/input-to.component';
import {CurrencyConversionService} from "./currency-conversion.service";
import { CalculatorComponent } from './calculator/calculator.component';


const routes: Routes = [
  {path: 'currency', component: CurrencyComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    OnlyNumberDirective,
    HeaderComponent,
    SelectFromComponent,
    InputFromComponent,
    SelectToComponent,
    InputToComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [CurrencyConversionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
