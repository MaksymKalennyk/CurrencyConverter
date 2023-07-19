import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFromComponent } from './input-from.component';

describe('InputFromComponent', () => {
  let component: InputFromComponent;
  let fixture: ComponentFixture<InputFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
