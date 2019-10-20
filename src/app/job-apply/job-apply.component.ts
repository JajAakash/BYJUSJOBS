import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobApplyService } from './job-apply.service';
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
    if(this.infoservice.jobid!=undefined){
      this.jobDetails= await this.applyService.jobApplyService().toPromise();
    }
    else{
      this.jobDetails=JSON.parse(sessionStorage.getItem('jobDetails'));
    }
    document.getElementById("jdesc").innerHTML = this.jobDetails.jd;

        let secondDate=new Date(this.currentDate);
        let firstDate = new Date(this.jobDetails.created);
        let diffInDays=Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(this.infoservice.days)));
        let noOfWeeks=Math.floor(diffInDays/7);
        let noOfMonths=Math.floor(diffInDays/30);
        this.jobDetails.noOfDays=diffInDays;
        this.jobDetails.noOfWeeks=noOfWeeks;
        this.jobDetails.noOfMonths=noOfMonths;
        sessionStorage.setItem('jobDetails',JSON.stringify(this.jobDetails))
  }
  
  ngOnInit() {
    this.jobs();
  }

}
