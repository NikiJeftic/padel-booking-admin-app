import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

type PaymentStatus = 'all' | 'paid' | 'unpaid' | 'partial';
type BookingType = 'all' | 'normal' | 'blocked';

export interface DayViewFilters {
  date: Date;
  paymentStatus: PaymentStatus;
  bookingType: BookingType;
  courts: 'all' | number[];
}

@Component({
  selector: 'app-admin-day-filters',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  templateUrl: './admin-day-view-filters.html',
})
export class AdminDayViewFiltersComponent {

  @Input() courts: { id: number; name: string }[] = [];

  @Output() filtersChange = new EventEmitter<DayViewFilters>();

  filters: DayViewFilters = {
    date: new Date(),
    paymentStatus: 'all',
    bookingType: 'all',
    courts: 'all', // ✅ default = all courts
  };

  paymentStatuses: { value: PaymentStatus; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'unpaid', label: 'Unpaid' },
    { value: 'partial', label: 'Partial' },
    { value: 'paid', label: 'Paid' },
  ];

  bookingTypes: { value: BookingType; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'normal', label: 'Bookings' },
    { value: 'blocked', label: 'Blocked' },
  ];

  setDate(date: Date | null) {
    if (!date) return;
    this.filters.date = date;
    this.emit();
  }


  setPaymentStatus(status: PaymentStatus) {
    this.filters.paymentStatus = status;
    this.emit();
  }

  setBookingType(type: BookingType) {
    this.filters.bookingType = type;
    this.emit();
  }

  setCourts(values: (number | 'all')[]) {
    if (values.includes('all') || values.length === 0) {
      this.filters.courts = 'all';
    } else {
      this.filters.courts = values.filter(v => v !== 'all') as number[];
    }
    this.emit();
  }

  onCourtsSelectionChange(values: (number | 'all')[]) {
    // User selected a specific court
    if (values.some(v => v !== 'all')) {
      this.filters.courts = values.filter(v => v !== 'all') as number[];
      this.emit();
      return;
    }

    // User cleared all → fallback to all
    this.filters.courts = 'all';
    this.emit();
  }

  private emit() {
    this.filtersChange.emit({ ...this.filters });
  }
}
