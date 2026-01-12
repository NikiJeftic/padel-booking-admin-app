import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Court, CourtFormState } from '../../pages/courts-page/courts-page';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-court-form',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './court-form.html',
})
export class CourtFormComponent implements OnChanges {

  @Input() court: Court | null = null;

  @Output() save = new EventEmitter<CourtFormState>();
  @Output() cancel = new EventEmitter<void>();

  form: CourtFormState = {
    name: '',
    type: 'indoor',
    active: true,
  };

  ngOnChanges() {
    if (this.court) {
      this.form = {
        name: this.court.name,
        type: this.court.type,
        active: this.court.active,
      };
    } else {
      this.form = {
        name: '',
        type: 'indoor',
        active: true,
      };
    }
  }

  onSave() {
    this.save.emit(this.form);
  }
}
