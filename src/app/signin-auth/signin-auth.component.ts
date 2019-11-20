import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { SigninAuthService } from './signin-auth.service';
import { Http } from '@angular/http';
import { User } from './user';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signin-auth',
  templateUrl: './signin-auth.component.html',
  styleUrls: ['./signin-auth.component.css']
})
export class SigninAuthComponent implements OnInit {
  signinForm:FormGroup;
  //user:any;
  signup:boolean=false;
  response;  
  user=new User();
  constructor(public OAuth: AuthService,private _http:Http,private router:Router,private formbuilder: FormBuilder, private loginService:SigninAuthService) { }

public socialLogIn(socialProvider: string) {  
  let socialPlatformProvider;  
  if (socialProvider === 'google') {  
    socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  }
  // } else if (socialProvider === 'google') {  
  //   socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
  // }  
  this.OAuth.signIn(socialPlatformProvider).then(user => {    
    this.Loginresponse(user);
  });  
}  
Loginresponse(user) {  
  this.loginService.loginresponse(user).subscribe(
    (res: any) => {    
    //this.response = res; 
    localStorage.setItem('token', res);  
    this.router.navigate(['/jobs']);  
  })  
}  


  ngOnInit() {
    this.signinForm=this.formbuilder.group({

      email: [null,[Validators.required]],
      password: [null,[Validators.required]],
    });
  }

}
