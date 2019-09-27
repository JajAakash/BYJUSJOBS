import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Jobdata } from './jobdata';
import { Router} from '@angular/router';
import { InformationService } from '../information.service';
import { PostjobService } from './postjob.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {

  jobData:Jobdata[]
  errorMsg:string;
  jobdataForm:FormGroup;
  //exp:number[]

  constructor(private formbuilder: FormBuilder,private router:Router,private information:InformationService,private postJobService:PostjobService) { }

  postJobs(){
    console.log(this.jobdataForm.value.skills)
    var skill=this.jobdataForm.value.skills.split(",");

    var exp = this.jobdataForm.value.experience.split("-").map(function(item) {
    return parseInt(item);
    });


console.log(exp);
    
    this.jobdataForm.value.skills=skill;
    this.jobdataForm.value.experience=exp;

    this.postJobService.postJobs(this.jobdataForm.value).subscribe(respdata=>this.jobData=respdata)
    
  }

  
//   var str = "Apples are round, and apples are juicy."; 
// var splitted = str.split(" ", 3); 
// console.log(splitted)

  ngOnInit() {
    this.jobdataForm=this.formbuilder.group({
      companyname: ['',[Validators.required]],
      title: ['',[Validators.required]],
      type: ['',[Validators.required]],
      skills: ['',[Validators.required]],
      experience: ['',[Validators.required]]
      ,salary: ['',[Validators.required]]
      ,location: ['',[Validators.required]]
      ,startdate: ['',[Validators.required]]
      ,enddate: ['',[Validators.required]],
      applylink: ['',[Validators.required]],
      source: ['',[Validators.required]],
      created: ['',[Validators.required]],
      jd: ['',[Validators.required]]
    });
  }

}




