import { BrowserModule } from '@angular/platform-browser';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobpostComponent } from './jobpost/jobpost.component';
import { InformationService } from './information.service';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobsViewComponent } from './jobs-view/jobs-view.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import{MatDatepickerModule, MatNativeDateModule, MatProgressSpinnerModule, MatProgressBarModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule,MatIconModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RespostComponent } from './respost/respost.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SigninAuthComponent } from './signin-auth/signin-auth.component';
import { SignupAuthComponent } from './signup-auth/signup-auth.component';
import { GoogleLoginProvider, FacebookLoginProvider, AuthService } from 'angularx-social-login';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service'
import { from } from 'rxjs';
import { JobsearchService } from './jobsearch/jobsearch.service';

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: FacebookLoginProvider.PROVIDER_ID,  
        provider: new FacebookLoginProvider('app -id')  
      },  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('95434812881-nl4280nc6f0kbukd8upsv78qrikf1h9a.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
}  


const material=[MatDatepickerModule,MatFormFieldModule,
  MatInputModule,MatProgressSpinnerModule,MatProgressBarModule,
  MatNativeDateModule];
@NgModule({
  declarations: [
    AppComponent,
    JobpostComponent,
    JobsearchComponent,
    JobsViewComponent,
    JobApplyComponent,
    RespostComponent,
    SigninAuthComponent,
    SignupAuthComponent
  ],
  imports: [
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatPaginatorModule,
    MatIconModule,
    material,
    NgxPaginationModule,
    BrowserAnimationsModule
    
  ],
  exports:[MatDatepickerModule, 
    MatNativeDateModule],
  providers: [
    InformationService,
    AuthService,  
    AuthGuard,
    JobsearchService,
    {  
      provide: AuthServiceConfig, 
      useFactory: socialConfigs  
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
