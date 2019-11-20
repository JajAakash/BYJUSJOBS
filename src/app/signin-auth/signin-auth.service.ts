import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {

  constructor(private _http:HttpClient,private inforService:InformationService, private router:Router) { }

  url;

  loginresponse(responce):Observable<any>{
    this.url =  'http://localhost:5000/auth/login/';
    return this._http.post(this.url,responce);
    // .pipe(map((response: Response) => response.json()));
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate['/jobs']
  }

  gettoken(){
    return localStorage.getItem('token')
  }
  
  
}
