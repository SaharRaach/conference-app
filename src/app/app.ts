import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { FriendsList } from './components/friends-list/friends-list';
import { Header } from './components/header/header';
import { Navbar } from './components/navbar/navbar';
import { Notifications } from './components/notifications/notifications';
import { UserProfile } from './components/user-profile/user-profile';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    UserProfile,
    FriendsList,
    Notifications,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
