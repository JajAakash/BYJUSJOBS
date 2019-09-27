import { Component, OnInit } from '@angular/core';
import { Jobdata } from '../jobpost/jobdata';
import { JobsearchService } from './jobsearch.service';
import { JobData } from './jobData';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { PostjobService } from '../jobpost/postjob.service';
import { filter } from '../../../node_modules/rxjs/operators';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  current=new Date();
  joblist:JobData[];
  //filterjob:JobData [];
  filterjob:any[];
  jobsearchForm:FormGroup;
  currentDate: Date = new Date();
  days:any=1000*60*60*24;
  firstDate:Date
  secondDate:Date
  diffInDays:number;
  

  constructor(private router:Router,private jobService:JobsearchService,private formbuilder: FormBuilder,private infoservice:InformationService) {
    //console.log(this.currentDate-this.days*2);
   }
   
   getJob(){
    this.infoservice.location= this.jobsearchForm.value.location;
    this.infoservice.skills= this.jobsearchForm.value.skills;
    this.infoservice.experience=this.jobsearchForm.value.experience;
    //this.firstDate =this.currentDate
    // this.secondDate = this.currentDate

    
    this.router.navigate(['/jobs-view']);
    //  if(this.jobsearchForm.value.skills==null && this.jobsearchForm.value.location!=undefined && this.jobsearchForm.value.experience==undefined){
    //   this.jobService.getJobsbyLocation().subscribe(resJobs=>this.infoservice.jobviewlist=resJobs);
    //  }
    
    
    


     //if(this.jobsearchForm.value.skills!=undefined && this.jobsearchForm.value.location==undefined && this.jobsearchForm.value.experience==null){
      // this.jobService.getJobsbySkills().subscribe(resJobs=>this.filterjob=resJobs);
      // console.log("_______+++++++",this.filterjob)
      //this.router.navigate(['/jobs-view']);
    //  }
     //}

    //  if(this.jobsearchForm.value.skills==undefined && this.jobsearchForm.value.location==undefined && this.jobsearchForm.value.experience!=undefined){
    //   this.jobService.getJobsbyExperience().subscribe(resJobs=>this.infoservice.jobviewlist=resJobs);
    //  }
    //  else{
    //   this.jobService.getJobs().subscribe(resJobs=>this.filterjob=resJobs);
    //  }


   }

   applyJob(jobid:string){
    this.infoservice.jobid=jobid;
    console.log(this.infoservice.jobid,"{{{{")
    this.router.navigate(['/apply']);

   }
  
  //  getJobbySkills(){
  //   this.infoservice.skills= this.jobsearchForm.value.skills
  //   //console.log("________________",this.jobsearchForm.value.location,this.jobsearchForm.value.skill,this.jobsearchForm.value.experiences);
  //    if(this.jobsearchForm.value.skills!=undefined && this.jobsearchForm.value.location==undefined && this.jobsearchForm.value.experience==null){
  //     console.log("__*****************");
  //     this.jobService.getJobsbySkills().subscribe(resJobs=>this.filterjob=resJobs);
  //    }
  //  }
  
  //  getJobbyexperience(){
  //   this.infoservice.skills= this.jobsearchForm.value.skills
  //   //console.log("________________",this.jobsearchForm.value.location,this.jobsearchForm.value.skill,this.jobsearchForm.value.experiences);
  //    if(this.jobsearchForm.value.skills!=undefined && this.jobsearchForm.value.location==undefined && this.jobsearchForm.value.experience==null){
  //     console.log("__*****************");
  //     this.jobService.getJobsbySkills().subscribe(resJobs=>this.filterjob=resJobs);
  //    }
  //  }
  async jobsearch(){
    this.filterjob= await this.jobService.getJobs().toPromise();
    console.log("i am in to promise")

    for (let i of this.filterjob) {
      this. secondDate=new Date(i.enddate);
      this.firstDate = new Date(i.created);
    
    this.diffInDays=Math.round(Math.abs((this.secondDate.getTime() - this.firstDate.getTime())/(this.days)));
    console.log("date",
    this.firstDate.getDate(),this.secondDate.getDate(),this.diffInDays);
    //this.filterjob.push(this.diffInDays)
    console.log(i);
  }
  }
   
  ngOnInit() {
    console.log("in search")
     //this.filterjob=await this.jobService.getJobs().toPromise()  
    //this.jobService.getJobs().subscribe(resJobs=>this.filterjob=resJobs);
    this.jobsearch();
    // console.log("i am in to promise inside")
    

      this.jobsearchForm=this.formbuilder.group({
        location: [null,[Validators.required]],
        skills: [null,[Validators.required]],
        experience: [null,[Validators.required]]
      });
       console.log("i am b4 here below")
    //   this.filtersLoaded.then((res) => {
    //     for (let i of this.filterjob) {
    //       this.secondDate=i.created; 
    //       this. secondDate=new Date(i.enddate)
    //       this.firstDate = new Date(i.created);
    //       console.log("date",typeof(this.secondDate),typeof(this.currentDate),this.firstDate.getDate(),this.secondDate.getDate());
    //     }
    //     this.diffInDays=Math.round(Math.abs((this.secondDate.getTime() - this.firstDate.getTime())/(this.days)));
      
    //     console.log('I get called:' ); // I get called: true
    // });
        //this.filtersLoaded.then(
          //console.log("i am here below")
          // for (let i of this.filterjob) {
          //   this.secondDate=i.created; 
          //   this. secondDate=new Date(i.enddate)
          //   this.firstDate = new Date(i.created);
          //   console.log("date",typeof(this.secondDate),typeof(this.currentDate),this.firstDate.getDate(),this.secondDate.getDate());
          // }
          // this.diffInDays=Math.round(Math.abs((this.secondDate.getTime() - this.firstDate.getTime())/(this.days)));
        
        
        //}
      
  }
  
  
  
}
