import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { RespostComponent } from './respost/respost.component';
import { SigninAuthComponent } from './signin-auth/signin-auth.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';


const routes: Routes = [
  { path: 'postJobs', component: JobpostComponent },
  { path: 'jobs', component: JobsearchComponent},
  { path: 'jobs-view', component: JobsViewComponent},
  { path: 'apply', component: JobApplyComponent},
  { path: 'sign-in', component: SigninAuthComponent},
  { path: 'sign-up', component: SignupAuthComponent},
  { path: 'applied', component: RespostComponent},
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
