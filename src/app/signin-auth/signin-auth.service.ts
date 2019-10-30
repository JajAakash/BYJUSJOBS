import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';


@Injectable({
  providedIn: 'root'
})
export class SigninAuthService {

  constructor(private _http:Http,private inforService:InformationService) { }

  googleLogin():Observable<any>{
    //console.log("cross origin",this.inforService.googleLogin)
    //console.warn(xhr.responseText);
    return this._http.get((this.inforService.googleLogin))
    .pipe(map((response: Response) => response.json()));
    //console.log("cross origin",this.inforService.googleLogin)
  }


}
