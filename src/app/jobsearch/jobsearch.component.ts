import { Component, OnInit } from '@angular/core';
import { JobsearchService } from './jobsearch.service';
import { JobData } from './jobData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  
  current=new Date();
  joblist:JobData;
  filterjob:any[];
  jobsearchForm:FormGroup;
  currentDate: Date = new Date();
  days:any=1000*60*60*24;
  datalength:number;

  constructor(private router:Router,private jobService:JobsearchService,private formbuilder: FormBuilder,private infoservice:InformationService){}
   
  getJob(){
    this.infoservice.location= this.jobsearchForm.value.location;
    this.infoservice.skills= this.jobsearchForm.value.skills;
    this.infoservice.experience=this.jobsearchForm.value.experience;
    this.router.navigate(['/jobs-view']);
  }

  applyJob(jobid:string){
    this.infoservice.jobid=jobid;
    this.router.navigate(['/apply']);

  }
  async jobsearch(){
    this.filterjob= await this.jobService.getJobs().toPromise();
    this.datalength=this.filterjob.length
    this.infoservice.jobs(this.filterjob);
  }
   
  ngOnInit() {
    this.jobsearch();
    this.jobsearchForm=this.formbuilder.group({
        location: [null,[Validators.required]],
        skills: [null,[Validators.required]],
        experience: [null,[Validators.required]]
      });
      
  }
  
}
