import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputToComponent } from './input-to.component';

describe('InputToComponent', () => {
  let component: InputToComponent;
  let fixture: ComponentFixture<InputToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
