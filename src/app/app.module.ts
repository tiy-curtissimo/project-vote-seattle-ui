import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { IdentityService } from './identity/identity.service';
import { ProjectService } from './project/project.service';
import { StudentService } from './student/student.service';
import { VoteService } from './vote/vote.service';

import { AppComponent } from './app.component';
import { StudentChooserComponent } from './student-chooser/student-chooser.component';
import { ProjectVotingComponent } from './project-voting/project-voting.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentChooserComponent,
    ProjectVotingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    IdentityService,
    StudentService,
    ProjectService,
    VoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
