import { TestBed } from '@angular/core/testing';

import { CurrencyRateService } from './currency-rate.service';

describe('CurrencyRateService', () => {
  let service: CurrencyRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
