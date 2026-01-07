import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  imports: [],
  templateUrl: './side-nav.html',
  styleUrl: './side-nav.css',
})
export class SideNav {
  @Input() isOpen = false;
  @Output() closeNav = new EventEmitter<void>();



  close() {
    this.closeNav.emit();
  }
}
