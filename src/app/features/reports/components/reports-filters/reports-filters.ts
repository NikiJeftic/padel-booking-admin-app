import { Component, EventEmitter, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

export interface ReportsFilters {
    startDate: Date;
    endDate: Date;
    courts: 'all' | number[];
}

@Component({
    selector: 'app-reports-filters',
    standalone: true,
    imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    templateUrl: './reports-filters.html',
})
export class ReportsFiltersComponent {

    @Output() filtersChange = new EventEmitter<ReportsFilters>();

    filters: ReportsFilters = {
        startDate: new Date(),
        endDate: new Date(),
        courts: 'all',
    };

    courts = [
        { id: 1, name: 'Court 1' },
        { id: 2, name: 'Court 2' },
        { id: 3, name: 'Court 3' },
    ];

    emit() {
        this.filtersChange.emit({ ...this.filters });
    }

    setCourts(values: (number | 'all')[]) {
        this.filters.courts =
            values.includes('all') || values.length === 0
                ? 'all'
                : values.filter(v => v !== 'all') as number[];

        this.emit();
    }
}