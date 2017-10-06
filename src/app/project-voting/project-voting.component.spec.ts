import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectVotingComponent } from './project-voting.component';

describe('ProjectVotingComponent', () => {
  let component: ProjectVotingComponent;
  let fixture: ComponentFixture<ProjectVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
