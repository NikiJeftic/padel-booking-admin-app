import { Component } from '@angular/core';
import { ReportsFiltersComponent } from '../../components/reports-filters/reports-filters';
import { ReportsKpisComponent } from '../../components/reports-kpis/reports-kpis';
import { ReportsChartsComponent } from '../../components/reports-charts/reports-charts';

export interface ReportsFilters {
    startDate: Date;
    endDate: Date;
    courts: 'all' | number[];
}

@Component({
    selector: 'app-reports-page',
    standalone: true,
    imports: [
        ReportsFiltersComponent,
        ReportsKpisComponent,
        ReportsChartsComponent,
    ],
    templateUrl: './reports-page.html',
})
export class ReportsPage {
    filters: ReportsFilters = {
        startDate: new Date(),
        endDate: new Date(),
        courts: 'all',
    };

    onFiltersChange(filters: ReportsFilters) {
        this.filters = filters;
    }
}