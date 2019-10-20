import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Router} from '@angular/router';
import { InformationService } from '../information.service';
import { PostjobService } from './postjob.service';

@Component({
  selector: 'app-jobpost',
  templateUrl: './jobpost.component.html',
  styleUrls: ['./jobpost.component.css']
})
export class JobpostComponent implements OnInit {
  public Editor = ClassicEditor;
  jobData:any;
  errorMsg:string;
  jobdataForm:FormGroup;
  jd:string;



  public onChange( { editor }: ChangeEvent ) {
    this.jd = editor.getData();

}

  constructor(private formbuilder: FormBuilder,private router:Router,private information:InformationService,private postJobService:PostjobService) { }

  async postJobs(){
    var skill=this.jobdataForm.value.skills.split(",");

    var exp = this.jobdataForm.value.experience.split("-").map(function(item) {
    return parseInt(item);
    });    
    this.jobdataForm.value.skills=skill;
    this.jobdataForm.value.experience=exp;
    this.jobdataForm.value.jd=this.jd;

    this.jobData=await this.postJobService.postJobs(this.jobdataForm.value).toPromise();
    if(this.jobData != null){
      this.information.switch=true;
      this.router.navigate(['/applied']);
    }
  }


  ngOnInit() {
    this.jobdataForm=this.formbuilder.group({
      companyname: ['',[Validators.required]],
      title: ['',[Validators.required]],
      type: ['',[Validators.required]],
      skills: ['',[Validators.required]],
      experience: ['',[Validators.required]]
      
      ,location: ['',[Validators.required]]
      ,startdate: ['',[Validators.required]]
      ,enddate: ['',[Validators.required]],
      applylink: ['',[Validators.required]],
      source: [''],
      salary: ['']
      // jd: ['',[Validators.required]]
    });
  }

}




