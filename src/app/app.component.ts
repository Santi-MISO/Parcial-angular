import { Component } from '@angular/core';
import { CafeListComponent } from './cafe/components/cafe-list/cafe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CafeListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafe-app';
}
