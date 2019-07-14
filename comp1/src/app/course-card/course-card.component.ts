import {
	AfterContentInit,
	AfterViewInit,
	Component,
	ContentChild,
	ContentChildren,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output, QueryList, TemplateRef,
	ViewChild
} from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../model/course';
// import {CourseImageComponent} from '../course-image/course-image.component';

// import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { Title } from '@angular/platform-browser';
// import { COURSES } from '../../db-data';
// import { Course } from '../model/course';

@Component({
	selector: 'course-card',
	templateUrl: './course-card.component.html',
	styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

	@Input()
	course: Course;

	@Input()
	cardIndex: number;

	@Output('courseSelected')
	courseSelected = new EventEmitter<Course>();

	constructor() { }

	ngOnInit() {
	}

	onCourseViewed() {
		console.log("was viewed ");

		this.courseSelected.emit(this.course);
	}

	isImageVisible() {
		return this.course.iconUrl;
	}

	cardClasses() {
		if (this.course.category == 'BEGINNER') {
			return 'BEGINNER';
		}
		// return {'beginner': this.course.category == 'BEGINNER'};
	}

	cardStyles() {
		// return { 'text-decoration': 'underline' };
		return { 'background-image': 'url(' + this.course.iconUrl + ')' };

	}
}
