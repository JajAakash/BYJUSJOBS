import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { SigninAuthService } from './signin-auth.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-signin-auth',
  templateUrl: './signin-auth.component.html',
  styleUrls: ['./signin-auth.component.css']
})
export class SigninAuthComponent implements OnInit {
  signinForm:FormGroup;
  user:any;
  signup:boolean=false;
  constructor(private _http:Http,private router:Router,private formbuilder: FormBuilder, private signinService:SigninAuthService) { }

  async googleLogin(){
    await this.signinService.googleLogin().toPromise();
    console.log("here in ghanta")
    //this._http.get('http://localhost:5000/auth/google')
  
  }

  ngOnInit() {
    this.signinForm=this.formbuilder.group({

      email: [null,[Validators.required]],
      password: [null,[Validators.required]],
    });
  }

}
