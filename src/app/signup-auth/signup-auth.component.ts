import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SigninAuthService } from '../signin-auth/signin-auth.service';
@Component({
  selector: 'app-signup-auth',
  templateUrl: './signup-auth.component.html',
  styleUrls: ['./signup-auth.component.css']
})
export class SignupAuthComponent implements OnInit {
  signupForm:FormGroup;
  user:any;
  constructor(private router:Router,private formbuilder: FormBuilder, private signinService:SigninAuthService) { }

  async googleSignUp(){
    //this.user = await this.signinService.googleLogin().toPromise();
  }


  ngOnInit() {
  }

}
