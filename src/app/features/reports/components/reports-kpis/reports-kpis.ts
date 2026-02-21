import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReportsFilters } from '../../pages/reports-page/reports-page';

@Component({
    selector: 'app-reports-kpis',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './reports-kpis.html',
})
export class ReportsKpisComponent {
    @Input() filters!: ReportsFilters;
}