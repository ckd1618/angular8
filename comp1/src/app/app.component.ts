import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  c = COURSES[0];
  r = COURSES[1];
  n = COURSES[2];

  onCourseSelected() {
    console.log("app lvl triggered")
  }

}
