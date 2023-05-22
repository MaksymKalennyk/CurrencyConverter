import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CurrencyComponent } from './currency/currency.component';
import {FormsModule} from "@angular/forms";
import { OnlyNumberDirective } from './only-number.directive';


const routes: Routes = [
  {path: 'currency', component: CurrencyComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
