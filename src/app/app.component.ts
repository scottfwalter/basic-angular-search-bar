import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, SearchBarComponent],
  template: `
    <mat-toolbar>
      <app-search-bar />
    </mat-toolbar>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {}
