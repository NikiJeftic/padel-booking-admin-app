import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BookingDetailsPanelComponent } from '../booking-details-panel/booking-details-panel';
import { AdminDayViewFiltersComponent, DayViewFilters } from '../admin-day-view-filters/admin-day-view-filters';

export interface Booking {
  id: number;
  courtId: number;
  customerName: string;
  phone: string;
  start: string;
  end: string;
  status: 'paid' | 'partial' | 'unpaid' | 'blocked';
  duration: number;
  courtName: string;
  override?: boolean;
}

@Component({
  selector: 'app-admin-day-view',
  imports: [NgClass, BookingDetailsPanelComponent, AdminDayViewFiltersComponent],
  templateUrl: './admin-day-view.html',
  styleUrl: './admin-day-view.css',
})
export class AdminDayView {
  hourHeight = 64;

  hours = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00', '21:00'
  ];

  courts: any[] = [
    { id: 1, name: 'Court 1', type: 'Indoor' },
    { id: 2, name: 'Court 2', type: 'Outdoor' },
    { id: 3, name: 'Court 3', type: 'Indoor' },
    { id: 4, name: 'Court 4', type: 'Outdoor' },
  ];

  bookings: Booking[] = [
    {
      id: 1,
      courtId: 1,
      customerName: 'Marko P.',
      start: '10:00',
      end: '11:00',
      status: 'unpaid',
      phone: '+123456789',
      courtName: 'Court 1',
      duration: 60,
    },
    {
      id: 2,
      courtId: 2,
      customerName: 'Nikola J.',
      start: '11:00',
      end: '12:30',
      status: 'partial',
      phone: '+987654321',
      courtName: 'Court 2',
      duration: 90,
    },
    {
      id: 3,
      courtId: 3,
      customerName: 'Maintenance',
      start: '09:00',
      end: '11:00',
      status: 'blocked',
      phone: '+23423232',
      courtName: 'Court 3',
      duration: 120,
    },
    {
      id: 4,
      courtId: 3,
      customerName: 'Petar K.',
      start: '14:00',
      end: '16:00',
      status: 'paid',
      override: true,
      phone: '+5647382910',
      courtName: 'Court 3',
      duration: 120,
    }
  ];

  selectedBooking: Booking | null = null;

  filters: DayViewFilters = {
    date: new Date(),
    paymentStatus: 'all',
    bookingType: 'all',
    courts: [],
  };


  selectBooking(booking: Booking) {
    this.selectedBooking = booking;
  }

  bookingsByCourt(courtId: number) {
    return this.bookings.filter(b => b.courtId === courtId);
  }

  timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }

  topOffset(booking: Booking): number {
    const startMinutes = this.timeToMinutes(booking.start);
    const dayStart = this.timeToMinutes('09:00');
    return ((startMinutes - dayStart) / 60) * this.hourHeight;
  }

  height(booking: Booking): number {
    const duration =
      this.timeToMinutes(booking.end) -
      this.timeToMinutes(booking.start);
    return (duration / 60) * this.hourHeight;
  }

  bookingColor(booking: Booking) {
    switch (booking.status) {
      case 'paid': return 'bg-green-500';
      case 'partial': return 'bg-yellow-400';
      case 'unpaid': return 'bg-red-500';
      case 'blocked': return 'bg-gray-400';
    }
  }
}
