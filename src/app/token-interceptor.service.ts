import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {SigninAuthService} from './signin-auth/signin-auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService= this.injector.get(SigninAuthService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization : `Bearer ${authService.gettoken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
