import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookingRule } from '../../pages/booking-rules-page/booking-rules-page';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking-rules-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './booking-rules-list.html',
})
export class BookingRulesList {
  @Input() rules: BookingRule[] = [];
  @Output() edit = new EventEmitter<BookingRule>();
}
