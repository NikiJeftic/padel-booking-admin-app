import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReportsFilters } from '../../pages/reports-page/reports-page';

@Component({
    selector: 'app-reports-charts',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './reports-charts.html',
})
export class ReportsChartsComponent {
    @Input() filters!: ReportsFilters;
}