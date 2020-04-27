import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'events-app',
  template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
