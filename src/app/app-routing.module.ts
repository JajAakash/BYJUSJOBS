import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobpostComponent } from './jobpost/jobpost.component';


const routes: Routes = [
  { path: 'postJobs', component: JobpostComponent },
  { path: '', redirectTo: '/postJobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
