import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRulesPage } from './booking-rules-page';

describe('BookingRulesPage', () => {
  let component: BookingRulesPage;
  let fixture: ComponentFixture<BookingRulesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingRulesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingRulesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
