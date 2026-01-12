import { Routes } from '@angular/router';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { AdminDayView } from './features/admin-day-view/pages/admin-day-view';
import { BookingRulesPage } from './features/booking-rules/pages/booking-rules-page/booking-rules-page';
import { CourtsPage } from './features/courts/pages/courts-page/courts-page';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayout,
        children: [
            {
                path: '',
                component: AdminDayView, // /admin
            },
            {
                path: 'booking-rules',
                component: BookingRulesPage, // /admin/booking-rules
            },
            {
                path: 'courts',
                component: CourtsPage, // /admin/courts
            },
        ],
    },
    {
        path: '',
        redirectTo: 'admin',
        pathMatch: 'full',
    },
];
