import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsPage } from './courts-page';

describe('CourtsPage', () => {
  let component: CourtsPage;
  let fixture: ComponentFixture<CourtsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
