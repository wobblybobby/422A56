import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickNumbersComponent } from './pick-numbers.component';

describe('PickNumbersComponent', () => {
  let component: PickNumbersComponent;
  let fixture: ComponentFixture<PickNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
