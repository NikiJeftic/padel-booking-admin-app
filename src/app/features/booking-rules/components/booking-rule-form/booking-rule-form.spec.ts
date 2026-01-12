import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRuleForm } from './booking-rule-form';

describe('BookingRuleForm', () => {
  let component: BookingRuleForm;
  let fixture: ComponentFixture<BookingRuleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingRuleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRuleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
