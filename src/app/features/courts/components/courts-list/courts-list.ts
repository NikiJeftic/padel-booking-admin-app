import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Court } from '../../pages/courts-page/courts-page';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-courts-list',
  standalone: true,
  imports: [MatSlideToggleModule, TitleCasePipe],
  templateUrl: './courts-list.html',
})
export class CourtsListComponent {

  @Input() courts: Court[] = [];

  @Output() edit = new EventEmitter<Court>();
  @Output() toggleActive = new EventEmitter<Court>();
}
