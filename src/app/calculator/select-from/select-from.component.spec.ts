import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFromComponent } from './select-from.component';

describe('SelectFromComponent', () => {
  let component: SelectFromComponent;
  let fixture: ComponentFixture<SelectFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
