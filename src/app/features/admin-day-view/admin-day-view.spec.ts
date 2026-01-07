import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDayView } from './admin-day-view';

describe('AdminDayView', () => {
  let component: AdminDayView;
  let fixture: ComponentFixture<AdminDayView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDayView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDayView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
