import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CourtFormComponent } from '../../components/court-form/court-form';
import { CourtsListComponent } from '../../components/courts-list/courts-list';

export interface Court {
  id: number;
  name: string;
  type: 'indoor' | 'outdoor';
  active: boolean;
  order: number;
  createdAt: Date;
}

export interface CourtFormState {
  name: string;
  type: 'indoor' | 'outdoor';
  active: boolean;
}

@Component({
  selector: 'app-courts-page',
  standalone: true,
  imports: [
    MatSidenavModule,
    CourtsListComponent,
    CourtFormComponent
  ],
  templateUrl: './courts-page.html',
})
export class CourtsPage {

  courts: Court[] = [
    {
      id: 1,
      name: 'Court 1',
      type: 'indoor',
      active: true,
      order: 1,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Court 2',
      type: 'outdoor',
      active: true,
      order: 2,
      createdAt: new Date(),
    },
  ];

  selectedCourt: Court | null = null;
  drawerOpen = false;

  onAddCourt() {
    this.selectedCourt = null;
    this.drawerOpen = true;
  }

  onEditCourt(court: Court) {
    this.selectedCourt = court;
    this.drawerOpen = true;
  }

  onToggleActive(court: Court) {
    court.active = !court.active;
  }

  onCloseDrawer() {
    this.drawerOpen = false;
  }

  onSaveCourt(form: CourtFormState) {
    if (this.selectedCourt) {
      // edit
      Object.assign(this.selectedCourt, form);
    } else {
      // create
      this.courts.push({
        id: Date.now(),
        order: this.courts.length + 1,
        createdAt: new Date(),
        ...form,
      });
    }

    this.drawerOpen = false;
  }
}
