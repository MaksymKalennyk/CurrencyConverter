import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectToComponent } from './select-to.component';

describe('SelectToComponent', () => {
  let component: SelectToComponent;
  let fixture: ComponentFixture<SelectToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectToComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
