import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninAuthService } from './signin-auth/signin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private signinServ:SigninAuthService,private router:Router){}

  canActivate():boolean{
    if(this.signinServ.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/sign-in']);
      return false;
    }
  }
}
