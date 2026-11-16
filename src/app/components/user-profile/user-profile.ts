import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  readonly user = {
    name: 'Ahmed',
    email: 'ahmed@email.com',
  };
}
