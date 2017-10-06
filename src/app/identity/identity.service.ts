import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IdentityService {

  public studentChanged: Subject<Student>;
  private static studentKey = 'student';
  private student: Student;

  constructor() {
    this.studentChanged = new Subject<Student>();
    const json = window.localStorage.getItem(IdentityService.studentKey);
    if (json) {
      this.student = JSON.parse(json);
      this.studentChanged.next(this.student);
    }
  }

  get currentStudent() {
    return this.student || {
      id: null,
      firstName: null,
      lastName: null,
      firstId: null,
      secondId: null,
      thirdId: null
    };
  }

  set currentStudent(student: Student) {
    this.student = student;
    this.save();
  }

  updateFirst(id: number | null) {
    this.student.firstId = id;
    this.save();
  }

  updateSecond(id: number | null) {
    this.student.secondId = id;
    this.save();
  }

  updateThird(id: number | null) {
    this.student.thirdId = id;
    this.save();
  }

  private save() {
    if (this.student) {
      const json = JSON.stringify(this.student);
      window.localStorage.setItem(IdentityService.studentKey, json);
    } else {
      window.localStorage.removeItem(IdentityService.studentKey);
    }
    this.studentChanged.next(this.student);
  }

}
