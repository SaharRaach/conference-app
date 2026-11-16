import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly links = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  activeLink = 'Accueil';

  select(link: string): void {
    this.activeLink = link;
  }
}
