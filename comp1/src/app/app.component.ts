import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

// import { Component } from '@angular/core';
// import { COURSES } from '../db-data';
// import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  c = COURSES[0];
  r = COURSES[1];
  n = COURSES[2];

  onCourseSelected(course: Course) {
    console.log("app lvl triggered ", course)
  }

}
