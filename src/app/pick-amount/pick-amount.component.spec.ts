import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAmountComponent } from './pick-amount.component';

describe('PickAmountComponent', () => {
  let component: PickAmountComponent;
  let fixture: ComponentFixture<PickAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
