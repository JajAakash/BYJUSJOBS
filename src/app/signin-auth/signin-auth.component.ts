import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { SigninAuthService } from './signin-auth.service';

@Component({
  selector: 'app-signin-auth',
  templateUrl: './signin-auth.component.html',
  styleUrls: ['./signin-auth.component.css']
})
export class SigninAuthComponent implements OnInit {
  signinForm:FormGroup;
  user:any;
  signup:boolean=false;
  constructor(private router:Router,private formbuilder: FormBuilder, private signinService:SigninAuthService) { }

  async googleLogin(){
    this.user = await this.signinService.googleLogin().toPromise();
  }

  ngOnInit() {
    this.signinForm=this.formbuilder.group({

      email: [null,[Validators.required]],
      password: [null,[Validators.required]],
    });
  }

}
