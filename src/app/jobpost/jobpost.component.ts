import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Jobdata } from './jobdata';
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
  jobData:Jobdata[]
  errorMsg:string;
  jobdataForm:FormGroup;
  jd:string;

  public config = {
    placeholder: 'Type the content here!'
}

  public onChange( { editor }: ChangeEvent ) {
    this.jd = editor.getData();

    console.log( this.jd );
}

  constructor(private formbuilder: FormBuilder,private router:Router,private information:InformationService,private postJobService:PostjobService) { }

  postJobs(){
    var skill=this.jobdataForm.value.skills.split(",");

    var exp = this.jobdataForm.value.experience.split("-").map(function(item) {
    return parseInt(item);
    });    
    this.jobdataForm.value.skills=skill;
    this.jobdataForm.value.experience=exp;
    this.jobdataForm.value.jd=this.jd;

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




