import { Component } from '@angular/core';
import {SigninAuthService} from './signin-auth/signin-auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chakripao';

  constructor(private signinServ:SigninAuthService) { }
}

