import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsPanel } from './booking-details-panel';

describe('BookingDetailsPanel', () => {
  let component: BookingDetailsPanel;
  let fixture: ComponentFixture<BookingDetailsPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDetailsPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailsPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
