import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { JobpostComponent } from './jobpost/jobpost.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { RespostComponent } from './respost/respost.component';
import { SigninAuthComponent } from './signin-auth/signin-auth.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'postJobs', component: JobpostComponent, canActivate: [AuthGuard] },
  { path: 'jobs', component: JobsearchComponent},
  { path: 'jobs-view', component: JobsViewComponent, canActivate: [AuthGuard]},
  { path: 'apply', component: JobApplyComponent, canActivate: [AuthGuard]},
  { path: 'sign-in', component: SigninAuthComponent},
  { path: 'sign-up', component: SignupAuthComponent},
  { path: 'applied', component: RespostComponent},
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];
// , canActivate: [AuthGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
