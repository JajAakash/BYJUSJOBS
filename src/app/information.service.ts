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
  jobviewlist:JobViewData[];
  
  constructor() {console.log("kkkkkkkkkkkkk",this.jobviewlist) }

  postJobUrl='http://localhost:5000/byjusjobs/job/listed';
  jobSearch='http://localhost:5000/byjusjobs/jobs';
  jobbylocationurl='http://localhost:5000/byjusjobs/jobsin/';
  jobbyskillsurl='http://localhost:5000/byjusjobs/jobs-for/';
  jobbyExpurl='http://localhost:5000/byjusjobs/jobs-experience/';
  jobbyidurl='http://localhost:5000/byjusjobs/jobs/';

}
