import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Booking } from '../admin-day-view/admin-day-view';

@Component({
  selector: 'app-booking-details-panel',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './booking-details-panel.html',
})
export class BookingDetailsPanelComponent {
  @Input() booking!: Booking;
  @Input() open = false;

  @Output() close = new EventEmitter<void>();
  @Output() markPaid = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @Output() addNote = new EventEmitter<void>();
}
