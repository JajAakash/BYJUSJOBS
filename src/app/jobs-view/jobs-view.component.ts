import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobViewData } from './jobViewData';
import { JobsearchService } from '../jobsearch/jobsearch.service';
import { Router } from '@angular/router';

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
      this.infoService.jobs(this.jobList);
    }

    if(this.infoService.skills==null && this.infoService.location!=undefined && this.infoService.experience==undefined){
    this.jobList= await this.jobService.getJobsbyLocation().toPromise();
    this.infoService.jobs(this.jobList);
    }

    if(this.infoService.skills==undefined && this.infoService.location==undefined && this.infoService.experience!=undefined){
      this.jobList= await this.jobService.getJobsbyExperience().toPromise();
      this.infoService.jobs(this.jobList);
    }

  }
  applyJob(jobid:string){
    this.infoService.jobid=jobid;
    this.router.navigate(['/apply']);

  }

  
  ngOnInit() {
    this.jobs();
  }
} 
