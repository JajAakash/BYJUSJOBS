import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }

  postJobUrl='http://localhost:5000/byjusjobs/job/listed';
}
