import { Routes } from '@angular/router';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { AdminDayView } from './features/admin-day-view/admin-day-view';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: AdminDayView
            }
        ]
    },
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full'
    }
];
