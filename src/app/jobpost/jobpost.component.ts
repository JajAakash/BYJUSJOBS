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

  constructor(private formbuilder: FormBuilder,private router:Router,private information:InformationService,private postJobService:PostjobService) { }

  postJobs(){
    console.log("88888888888",this.jobdataForm.value)
    this.postJobService.postJobs(this.jobdataForm.value).subscribe(respdata=>this.jobData=respdata )
    
  }

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




