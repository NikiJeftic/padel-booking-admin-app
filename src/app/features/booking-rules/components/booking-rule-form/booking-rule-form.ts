import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AvailabilityRule, BookingRule, BookingRuleFormState } from '../../pages/booking-rules-page/booking-rules-page';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-booking-rule-form',
  standalone: true,
  imports: [FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
  ],
  templateUrl: './booking-rule-form.html',
  styleUrl: './booking-rule-form.css',
})
export class BookingRuleForm {
  @Input() rule: BookingRule | null = null;

  @Output() save = new EventEmitter<BookingRuleFormState>();
  @Output() cancel = new EventEmitter<void>();

  form: BookingRuleFormState = {
    startDate: new Date(),
    endDate: new Date(),
    openingTime: '09:00',
    closingTime: '22:00',
    availabilityRules: [],
  };

  // inline editor state
  showAddRule = false;

  newRule: Partial<AvailabilityRule> = {
    court: 'all',
    startTime: '',
    endTime: '',
    durations: [],
  };

  get hasAllCourtsRule(): boolean {
    return this.form.availabilityRules.some(r => r.court === 'all');
  }

  openAddRule() {
    this.showAddRule = true;
    this.newRule = {
      court: 'all',
      startTime: '',
      endTime: '',
      durations: [],
    };
  }

  cancelAddRule() {
    this.showAddRule = false;
  }

  addAvailabilityRule() {
    if (
      !this.newRule.court ||
      !this.newRule.startTime ||
      !this.newRule.endTime ||
      !this.newRule.durations?.length
    ) {
      return;
    }

    this.form.availabilityRules.push({
      id: crypto.randomUUID(),
      court: this.newRule.court,
      startTime: this.newRule.startTime,
      endTime: this.newRule.endTime,
      durations: [...this.newRule.durations],
    });

    this.showAddRule = false;
  }

  removeRule(id: string) {
    this.form.availabilityRules =
      this.form.availabilityRules.filter(r => r.id !== id);
  }

  toggleDuration(duration: number) {
    const list = this.newRule.durations ?? [];
    this.newRule.durations = list.includes(duration)
      ? list.filter(d => d !== duration)
      : [...list, duration];
  }

  onSave() {
    this.save.emit(this.form);
  }
}
