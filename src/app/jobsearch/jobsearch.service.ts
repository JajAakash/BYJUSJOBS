import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformationService } from '../information.service';

@Injectable({
  providedIn: 'root'
})
export class JobsearchService {
constructor(private _http:HttpClient,private inforService:InformationService) {
   }
  
  getJobs():Observable<any>{
    return this._http.get(this.inforService.jobSearch);
    // .pipe(map((response: Response) => response.json())); this was the last line with every methods
    
  }

  getJobsbyLocation():Observable<any>{
    return this._http.get(this.inforService.jobbylocationurl+this.inforService.location)
    
  }

  getJobsbySkills():Observable<any>{
    
    return this._http.get(this.inforService.jobbyskillsurl+this.inforService.skills)
    
  }

  getJobsbyExperience():Observable<any>{
    return this._http.get(this.inforService.jobbyExpurl+this.inforService.experience)
    
  }

  getJobsbylocskill():Observable<any>{
    return this._http.get(this.inforService.jobbylocskill+this.inforService.skills+'/'+this.inforService.location)
    
  }

  getJobsbyexpskill():Observable<any>{
    return this._http.get(this.inforService.jobbyexpskill+this.inforService.experience+'/'+this.inforService.skills)
  }

  getJobsexploc():Observable<any>{
    return this._http.get(this.inforService.jobsbyexploc+this.inforService.experience+'/'+this.inforService.location)
  }


  getJobsbyall():Observable<any>{
    return this._http.get(this.inforService.jobsbyall+this.inforService.skills+'/'+this.inforService.location+'/'+this.inforService.experience)
  }

}
