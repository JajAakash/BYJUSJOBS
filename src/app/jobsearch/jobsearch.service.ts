import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {

  constructor(private _http:Http,private inforService:InformationService) { }

  getJobs():Observable<any>{
    return this._http.get(this.inforService.jobSearch)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbyLocation():Observable<any>{
    return this._http.get(this.inforService.jobbylocationurl+this.inforService.location)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbySkills():Observable<any>{
    return this._http.get(this.inforService.jobbyskillsurl+this.inforService.skills)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbyExperience():Observable<any>{
    return this._http.get(this.inforService.jobbyExpurl+this.inforService.experience)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbylocskill():Observable<any>{
    console.log("in double params",this.inforService.jobbylocskill)
    return this._http.get(this.inforService.jobbylocskill+this.inforService.skills+'/'+this.inforService.location)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbyexpskill():Observable<any>{
    console.log("in double params",this.inforService.jobbyexpskill+this.inforService.experience+'/'+this.inforService.skills)
    return this._http.get(this.inforService.jobbyexpskill+this.inforService.experience+'/'+this.inforService.skills)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsexploc():Observable<any>{
    console.log("in double paramsssss",this.inforService.jobsbyexploc+this.inforService.experience+'/'+this.inforService.location)
    return this._http.get(this.inforService.jobsbyexploc+this.inforService.experience+'/'+this.inforService.location)
    .pipe(map((response: Response) => response.json()));
  }


  getJobsbyall():Observable<any>{
    console.log("in double params",this.inforService.jobsbyall+this.inforService.skills+'/'+this.inforService.location+'/'+this.inforService.experience)
    return this._http.get(this.inforService.jobsbyall+this.inforService.skills+'/'+this.inforService.location+'/'+this.inforService.experience)
    .pipe(map((response: Response) => response.json()));
  }

  jobApplyService():Observable<any>{
    return this._http.get(this.inforService.jobbyidurl+this.inforService.jobid)
    .pipe(map((response: Response) => response.json()));
  }
}
