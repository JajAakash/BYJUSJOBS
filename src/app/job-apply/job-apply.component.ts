import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobApplyService } from './job-apply.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JobsearchService } from '../jobsearch/jobsearch.service';
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  jobDetails:any;
  experience:string;
  currentDate: Date = new Date();
  isDataAvail:boolean;
  
  constructor(private infoservice:InformationService,private applyService:JobsearchService) { }

  async jobs(){
        this.jobDetails= await this.applyService.jobApplyService().toPromise();
    //document.getElementById("jdesc").innerHTML = this.jobDetails.jd;

        let secondDate=new Date(this.currentDate);
        let firstDate = new Date(this.jobDetails.created);
        let diffInDays=Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(this.infoservice.days)));
        let noOfWeeks=Math.floor(diffInDays/7);
        let noOfMonths=Math.floor(diffInDays/30);
        this.jobDetails.noOfDays=diffInDays;
        this.jobDetails.noOfWeeks=noOfWeeks;
        this.jobDetails.noOfMonths=noOfMonths;
        this.jobDetails.avail=true;
        console.log(this.jobDetails.noOfDays,this.jobDetails.noOfMonths,this.jobDetails.noOfWeeks)

    
    this.isDataAvail=true;
    console.log(this.jobDetails);

    
  }
  
  ngOnInit() {
    this.jobs();
  }

}
