import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobApplyService } from './job-apply.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  jobDetails:any;
  experience:string;
  currentDate: Date = new Date();
  
  constructor(private infoservice:InformationService,private applyService:JobApplyService) { }

  async jobs(){
    this.jobDetails= await this.applyService.jobApplyService().toPromise();
    console.log("job details is",document.getElementById("jdesc"))
    document.getElementById("jdesc").innerHTML = this.jobDetails.jd;
    for( let i in this.jobDetails){
    
      if(i=="created"){
        let secondDate=new Date(this.currentDate);
        let firstDate = new Date(this.jobDetails[i]);
        let diffInDays=Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(this.infoservice.days)));
        let noOfWeeks=Math.floor(diffInDays/7);
        let noOfMonths=Math.floor(diffInDays/30);
        let noOfDays=diffInDays;
        
        this.jobDetails['noOfDays']=diffInDays;
        this.jobDetails['noOfWeeks']=noOfWeeks;
        this.jobDetails['noOfMonths']=noOfMonths;
      }
    }
  }
  ngOnInit() {
    this.jobs();
  }

}
