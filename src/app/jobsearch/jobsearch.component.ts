import { Component, OnInit, ViewChild } from '@angular/core';
import { JobsearchService } from './jobsearch.service';
import { JobData } from './jobData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {PageEvent} from "@angular/material/paginator"
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  
  current=new Date();
  filterjob:any;
  jobsearchForm:FormGroup;
  currentDate: Date = new Date();
  
  showSpinner=false;
  p: number = 1;
  count: number = 6;

  constructor(private router:Router,private jobService:JobsearchService,private formbuilder: FormBuilder,private infoservice:InformationService){}
   
  getJob(){
    let location:string="Bangalore";
    if(this.jobsearchForm.value.location=="Bangalore" || this.jobsearchForm.value.location=="bangalore" || this.jobsearchForm.value.location=="BANGALORE"){
      this.infoservice.location="Bengaluru"
    }
    else{this.infoservice.location= this.jobsearchForm.value.location;}
    this.infoservice.skills= this.jobsearchForm.value.skills;
    this.infoservice.experience=this.jobsearchForm.value.experience;
    this.router.navigate(['/jobs-view']);
  }

  applyJob(jobid:string){
    this.infoservice.jobid=jobid;
    this.router.navigate(['/apply']);

  }
  async jobsearch(){
    this.showSpinner=true;
    setTimeout(()=>{
      this.showSpinner=false;},3000);
    
    this.filterjob = await this.jobService.getJobs().toPromise();
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
