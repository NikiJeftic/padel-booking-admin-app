import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRulesList } from './booking-rules-list';

describe('BookingRulesList', () => {
  let component: BookingRulesList;
  let fixture: ComponentFixture<BookingRulesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingRulesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRulesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
