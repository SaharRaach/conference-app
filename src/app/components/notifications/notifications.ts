import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  readonly notifications = [
    'Nouvelle conférence : Angular 21 Conference',
  ];
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
