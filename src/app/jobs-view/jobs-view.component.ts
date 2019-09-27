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

  jobs(){
    if(this.infoService.skills!=undefined && this.infoService.location==undefined && this.infoService.experience==null){
      this.jobService.getJobsbySkills().subscribe(resJobs=>this.jobList=resJobs);
  }

  if(this.infoService.skills==null && this.infoService.location!=undefined && this.infoService.experience==undefined){
    this.jobService.getJobsbyLocation().subscribe(resJobs=>this.jobList=resJobs);
   }
   if(this.infoService.skills==undefined && this.infoService.location==undefined && this.infoService.experience!=undefined){
      this.jobService.getJobsbyExperience().subscribe(resJobs=>this.jobList=resJobs);
   }

}
applyJob(jobid:string){
  this.infoService.jobid=jobid;
  console.log(this.infoService.jobid,"{{{{}}}}}")
  this.router.navigate(['/apply']);

 }

  
  ngOnInit() {
    this.jobs();
    // console.log("PPPPPPPPPPPPPPPPPPPP",this.infoService.jobviewlist)
    // this.jobList=this.infoService.jobviewlist;
    
  
  }
} 
