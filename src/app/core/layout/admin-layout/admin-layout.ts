import { Component } from '@angular/core';
import { SideNav } from '../side-nav/side-nav';
import { RouterOutlet } from '@angular/router';
import { TopBar } from '../top-bar/top-bar';

@Component({
  selector: 'app-admin-layout',
  imports: [SideNav, RouterOutlet, TopBar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
  sidebarOpen = false;
}
