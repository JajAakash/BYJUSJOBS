import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { RestService } from './rest.service';
import { InformationService } from './information.service';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { JobApplyComponent } from './job-apply/job-apply.component';

@NgModule({
  declarations: [
    AppComponent,
    JobpostComponent,
    JobsearchComponent,
    JobsViewComponent,
    JobApplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    RestService,
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
