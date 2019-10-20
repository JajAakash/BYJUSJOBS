import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobsearchService } from '../jobsearch/jobsearch.service';
import { Router } from '@angular/router';
import { Session } from 'protractor';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.css']
})
export class JobsViewComponent implements OnInit {

  jobList:any[];
  constructor(private infoService:InformationService,private jobService:JobsearchService,private router:Router) { }
  
  async jobs(){
    if(this.infoService.skills!=undefined && this.infoService.location==undefined && this.infoService.experience==null){
      this.jobList= await this.jobService.getJobsbySkills().toPromise();
    }

    else if(this.infoService.skills==null && this.infoService.location!=undefined && this.infoService.experience==undefined){
    this.jobList= await this.jobService.getJobsbyLocation().toPromise();
    }

    else if(this.infoService.skills==undefined && this.infoService.location==undefined && this.infoService.experience!=undefined){
      this.jobList= await this.jobService.getJobsbyExperience().toPromise();
    }

    else if(this.infoService.skills!=undefined && this.infoService.location!=undefined && this.infoService.experience==undefined){
      this.jobList= await this.jobService.getJobsbylocskill().toPromise();
    }

    else if(this.infoService.skills!=undefined && this.infoService.location==undefined && this.infoService.experience!=undefined){
      this.jobList= await this.jobService.getJobsbyexpskill().toPromise();
    }

    else if(this.infoService.skills==undefined && this.infoService.location!=undefined && this.infoService.experience!=undefined){
      this.jobList= await this.jobService.getJobsexploc().toPromise();
    }


    else if(this.infoService.skills!=undefined && this.infoService.location!=undefined && this.infoService.experience!=undefined){
      this.jobList= await this.jobService.getJobsbyall().toPromise();
    }
    if(this.jobList!=undefined && this.jobList.length==0){
      this.infoService.switch=false;
      this.router.navigate(['/applied']);
      
    }

    if(this.jobList==undefined){
      this.jobList=JSON.parse(sessionStorage.getItem('jobList'));
      
    }
    sessionStorage.setItem('jobList',JSON.stringify(this.jobList))
    this.infoService.jobs(this.jobList);
    

  }
  applyJob(jobid:string){
    this.infoService.jobid=jobid;
    this.router.navigate(['/apply']);

  }

  
  ngOnInit() {
    this.jobs();
    
  }
} 
