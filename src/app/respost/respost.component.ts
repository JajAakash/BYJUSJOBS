import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-respost',
  templateUrl: './respost.component.html',
  styleUrls: ['./respost.component.css']
})
export class RespostComponent implements OnInit {

  searchjob:boolean;
  constructor(private router:Router, private infoService:InformationService) {
    this.searchjob=this.infoService.switch
   }
  
  
  view(){
    this.router.navigate(['/jobs']);
  }

  ngOnInit() {
  }

}
