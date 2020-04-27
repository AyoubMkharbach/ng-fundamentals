import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #E05C56; padding-left: 10px; }
  `]
})
export class LoginComponent {
  username;
  password;
  mouseoverLogin;
  loginInvalid = false;

  constructor(private authService: AuthService, private router: Router) {

  }

  login(value) {
    this.authService.loginUser(value.userName, value.password).subscribe(resp => {
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(['events']);
      }
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}