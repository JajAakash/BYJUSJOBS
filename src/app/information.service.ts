import { Injectable } from '@angular/core';
import { JobViewData } from './jobs-view/jobViewData';

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  location:string;
  skills:string;
  experience:number;
  jobid:string
  switch:boolean;
  jobviewlist:JobViewData[];
  currentDate: Date = new Date();
  days:any=1000*60*60*24;
  constructor(){} 

  jobs(filterjob:any){
    for (let i of filterjob) {
      let secondDate=new Date(this.currentDate);
      let firstDate = new Date(i.created);
      let diffInDays=Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(this.days)));
      let noOfWeeks=Math.floor(diffInDays/7);
      let noOfMonths=Math.floor(diffInDays/30);
      i.noOfDays=diffInDays;
      i.noOfWeeks=noOfWeeks;
      i.noOfMonths=noOfMonths;
      i.jobValid=(new Date(i.enddate)>new Date(this.currentDate));
  }
}
 postJobUrl='http://localhost:5000/byjusjobs/job/listed';
  jobSearch='http://localhost:5000/byjusjobs/jobs';
  jobbylocationurl='http://localhost:5000/byjusjobs/jobsin/';
  jobbyskillsurl='http://localhost:5000/byjusjobs/jobs-for/';
  jobbyExpurl='http://localhost:5000/byjusjobs/jobs-experience/';
  jobbyidurl='http://localhost:5000/byjusjobs/jobs/';
  jobbylocskill='http://localhost:5000/byjusjobs/jobs/';
  jobbyexpskill='http://localhost:5000/byjusjobs/skill/exp/';
  jobsbyexploc='http://localhost:5000/byjusjobs/exp/loc/';
  jobsbyall='http://localhost:5000/byjusjobs/jobs/';
  googleLogin='http://localhost:5000/auth/google'
  

}
