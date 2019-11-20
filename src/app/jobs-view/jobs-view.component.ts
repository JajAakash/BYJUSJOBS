import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobsearchService } from '../jobsearch/jobsearch.service';
import { Router } from '@angular/router';
import { Session } from 'protractor';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SigninAuthService } from '../signin-auth/signin-auth.service';

@Component({
  selector: 'app-jobs-view',
  templateUrl: './jobs-view.component.html',
  styleUrls: ['./jobs-view.component.css']
})
export class JobsViewComponent implements OnInit {
  showSpinner=true;
  jobList:any[];
  userlogin:any;
  constructor(private spinnerService: Ng4LoadingSpinnerService,private signinService:SigninAuthService, private infoService:InformationService,private jobService:JobsearchService,private router:Router) { }
  
  async jobs(){
    this.spinnerService.show();
    setTimeout(()=>this.showSpinner=false,3000)
    
    if(this.infoService.skills!=undefined && this.infoService.location==undefined && this.infoService.experience==null){
      this.jobList= await this.jobService.getJobsbySkills().toPromise();
    }

    else if(this.infoService.skills==null && this.infoService.location!=undefined && this.infoService.experience==undefined){
    this.jobList= await this.jobService.getJobsbyLocation().toPromise();
    }

    else if(this.infoService.skills==undefined && this.infoService.location==undefined && this.infoService.experience!=undefined){
      console.log("qwerty12345678")
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

    //this.showSpinner=true;
    // setTimeout(()=>{
    //   this.showSpinner=false;},6000);
    

    this.infoService.jobid=jobid;
    this.router.navigate(['/apply']);

  }


  // async loggedin(){
  //   this.userlogin=await this.signinService.googleLogin().toPromise();
  //   console.log("here in ghanta",this.userlogin)
  //   return console.log(this.userlogin)
  // }

  
  ngOnInit() {
      this.jobs(); 
  }
} 
