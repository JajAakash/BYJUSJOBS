import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { InformationService } from '../information.service';
import { JobData } from './jobData';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {

  constructor(private _http:Http,private inforService:InformationService) { }

  getJobs():Observable<JobData[]>{
    console.log("555555555555555",this.inforService.jobSearch)
    // console.log(data,this.informationService.postJobUrl)
    return this._http.get(this.inforService.jobSearch)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbyLocation():Observable<any[]>{
    console.log("999999999",this.inforService.jobbylocationurl,this.inforService.location)
    //console.log(this.inforService.postJobUrl)
    return this._http.get(this.inforService.jobbylocationurl+this.inforService.location)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbySkills():Observable<any[]>{
    console.log("in job by skills",this.inforService.jobbyskillsurl,this.inforService.skills)
    //console.log(this.inforService.postJobUrl)
    return this._http.get(this.inforService.jobbyskillsurl+this.inforService.skills)
    .pipe(map((response: Response) => response.json()));
  }

  getJobsbyExperience():Observable<any[]>{
    console.log("10000",this.inforService.jobbyExpurl,typeof this.inforService.experience)
    //console.log(this.inforService.postJobUrl)
    return this._http.get(this.inforService.jobbyExpurl+this.inforService.experience)
    .pipe(map((response: Response) => response.json()));
  }
}


// var str = "Apples are round, and apples are juicy."; 
// var splitted = str.split(" ", 3); 
// console.log(splitted)