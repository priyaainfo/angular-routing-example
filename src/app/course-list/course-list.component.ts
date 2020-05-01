import { Component, OnInit } from '@angular/core';
import { courseList } from './course-list-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courseList = courseList;
  constructor() { }

  ngOnInit() {
  }

}
