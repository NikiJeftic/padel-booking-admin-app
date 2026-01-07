import { Component, signal } from '@angular/core';
import { AdminLayout } from './core/layout/admin-layout/admin-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('padel-booker-admin');
}
