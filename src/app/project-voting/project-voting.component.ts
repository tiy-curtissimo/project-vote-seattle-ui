import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity/identity.service';
import { ProjectService } from '../project/project.service';
import { Project } from '../models/project';
import { Student } from '../models/student';
import { VoteService } from '../vote/vote.service';

@Component({
  selector: 'app-project-voting',
  templateUrl: './project-voting.component.html',
  styleUrls: ['./project-voting.component.css']
})
export class ProjectVotingComponent implements OnInit {

  private projects: Project[]
  currentStudent: Student;
  initialized: boolean;

  constructor(
    private identityService: IdentityService,
    private projectService: ProjectService,
    private voteService: VoteService
  ) {
    this.projects = [];
  }

  ngOnInit() {
    this.currentStudent = this.identityService.currentStudent;
    this.identityService
      .studentChanged
      .subscribe(student => this.currentStudent = student);
    this.projectService
      .getAll()
      .subscribe(projects => {
        this.projects = projects;
        this.initialized = true;
      });
  }

  handleFirst(id: number) {
    this.voteService
      .vote(id, 1)
      .subscribe(result => {
        if (result) {
          this.identityService.updateFirst(id);
        } else {
          this.identityService.updateFirst(null);
        }
      });
  }

  handleSecond(id: number) {
    this.voteService
      .vote(id, 2)
      .subscribe(result => {
        if (result) {
          this.identityService.updateSecond(id);
        } else {
          this.identityService.updateSecond(null);
        }
      });
}

  handleThird(id: number) {
    this.voteService
      .vote(id, 3)
      .subscribe(result => {
        if (result) {
          this.identityService.updateThird(id);
        } else {
          this.identityService.updateThird(null);
        }
      });
  }

}
