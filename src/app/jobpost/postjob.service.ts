import { Injectable } from '@angular/core';
import { Jobdata } from './jobdata';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostjobService {

  constructor(private informationService:InformationService,private restService:RestService,private _http:Http) { }

  postJobs(data:Jobdata):Observable<Jobdata[]>{
    console.log("555555555555555")
    console.log(data,this.informationService.postJobUrl)
    return this._http.post(this.informationService.postJobUrl,data)
    .pipe(map((response: Response) => response.json()));

  }
}
