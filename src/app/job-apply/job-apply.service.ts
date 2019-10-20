import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';

@Injectable({
  providedIn: 'root'
})
export class JobApplyService {

  constructor(private _http:Http,private infoService:InformationService) { }

  jobApplyService():Observable<any>{
    return this._http.get(this.infoService.jobbyidurl+this.infoService.jobid)
    .pipe(map((response: Response) => response.json()));
  }
}
