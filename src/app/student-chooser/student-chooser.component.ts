import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../identity/identity.service';
import { StudentService } from '../student/student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-chooser',
  templateUrl: './student-chooser.component.html',
  styleUrls: ['./student-chooser.component.css']
})
export class StudentChooserComponent implements OnInit {

  selectedStudent: Student;
  private students: Student[];
  initialized: boolean;

  constructor(
    private identityService: IdentityService,
    private studentService: StudentService
  ) {
    this.students = [];
  }

  ngOnInit() {
    this.selectedStudent = this.identityService.currentStudent;
    this.studentService
      .getAll()
      .subscribe(students => {
        this.students = students;
        this.initialized = true;
      });
  }

  selectStudent(sid: string) {
    const id = Number.parseInt(sid);
    const student = this.students.find(s => s.id === id);
    console.log(id, student);
    this.identityService.currentStudent = student;
    this.selectedStudent = student;
  }

}
