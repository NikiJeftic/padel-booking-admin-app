import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDayViewFilters } from './admin-day-view-filters';

describe('AdminDayViewFilters', () => {
  let component: AdminDayViewFilters;
  let fixture: ComponentFixture<AdminDayViewFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDayViewFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDayViewFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
