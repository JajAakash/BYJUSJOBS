import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { JobApplyService } from './job-apply.service';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  jobDetails:any[];
  experience:string;

  constructor(private infoservice:InformationService,private applyService:JobApplyService) { }

  ngOnInit() {
    this.applyService.jobApplyService().subscribe(resJobs=>this.jobDetails=resJobs)
    
    //this.experience=this.jobDetails.experience[0]+"-"+this.jobDetails[1]
     //console.log("77777777777",this.jobDetails[1])
  }

}
