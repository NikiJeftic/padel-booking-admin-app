import { Component } from '@angular/core';
import { BookingRulesList } from '../../components/booking-rules-list/booking-rules-list';
import { BookingRuleForm } from '../../components/booking-rule-form/booking-rule-form';
import { MatSidenavModule } from '@angular/material/sidenav';

export type CourtTarget = 'all' | number;

export interface AvailabilityRule {
  id: string;
  court: 'all' | number;
  startTime: string;   // "17:30"
  endTime: string;     // "21:00"
  durations: number[]; // [60, 90, 120]
}

export interface BookingRuleFormState {
  startDate: Date;
  endDate: Date;

  openingTime: string; // "09:00"
  closingTime: string; // "22:00"

  availabilityRules: AvailabilityRule[];
}


export interface BookingRule {
  id: string;

  // DATE RANGE
  startDate: Date;
  endDate: Date;

  // WORKING HOURS
  openingTime: string; // "08:00"
  closingTime: string; // "21:00"

  // AVAILABILITY PER COURT
  availabilityRules: AvailabilityRule[];

  // META
  override: boolean;
  description?: string;
  createdAt: Date;
}


export interface WorkingHours {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // Sun = 0
  openTime: string; // "08:00"
  closeTime: string; // "22:00"
  closed: boolean;
}


@Component({
  selector: 'app-booking-rules-page',
  standalone: true,
  imports: [BookingRulesList, BookingRuleForm, MatSidenavModule],
  templateUrl: './booking-rules-page.html',
})
export class BookingRulesPage {
  rules: BookingRule[] = [
    {
      id: 'rule-1',

      // DATE RANGE
      startDate: new Date('2026-01-01'),
      endDate: new Date('2026-02-20'),

      // WORKING HOURS
      openingTime: '08:00',
      closingTime: '21:00',

      // AVAILABILITY
      availabilityRules: [
        {
          id: 'ar-1',
          court: 1,
          startTime: '17:30',
          endTime: '21:00',
          durations: [90],
        },
        {
          id: 'ar-2',
          court: 2,
          startTime: '08:00',
          endTime: '21:00',
          durations: [120],
        },
      ],

      override: false,
      description: 'Winter schedule',
      createdAt: new Date(),
    },

    {
      id: 'rule-2',

      // DATE RANGE
      startDate: new Date('2026-03-01'),
      endDate: new Date('2026-04-30'),

      // WORKING HOURS
      openingTime: '09:00',
      closingTime: '22:00',

      // AVAILABILITY
      availabilityRules: [
        {
          id: 'ar-3',
          court: 'all',
          startTime: '09:00',
          endTime: '12:00',
          durations: [60],
        },
        {
          id: 'ar-4',
          court: 'all',
          startTime: '12:00',
          endTime: '22:00',
          durations: [60, 120],
        },
      ],

      override: false,
      description: 'Spring extended hours',
      createdAt: new Date(),
    },
  ];



  selectedRule: BookingRule | null = null;
  drawerOpen = false;

  onAddRule() {
    this.selectedRule = null;
    this.drawerOpen = true;
  }

  onEditRule(rule: BookingRule) {
    this.selectedRule = rule;
    this.drawerOpen = true;
  }

  onCloseDrawer() {
    this.drawerOpen = false;
  }

  onSaveRule(form: BookingRuleFormState) {
    if (this.selectedRule) {
      // UPDATE EXISTING RULE
      const updatedRule: BookingRule = {
        ...this.selectedRule,
        startDate: form.startDate,
        endDate: form.endDate,
        openingTime: form.openingTime,
        closingTime: form.closingTime,
        availabilityRules: form.availabilityRules,
      };

      this.rules = this.rules.map(r =>
        r.id === updatedRule.id ? updatedRule : r
      );

    } else {
      // CREATE NEW RULE
      const newRule: BookingRule = {
        id: crypto.randomUUID(),
        startDate: form.startDate,
        endDate: form.endDate,
        openingTime: form.openingTime,
        closingTime: form.closingTime,
        availabilityRules: form.availabilityRules,
        override: false,
        createdAt: new Date(),
      };

      this.rules = [...this.rules, newRule];
    }

    this.drawerOpen = false;
    this.selectedRule = null;
  }


}
