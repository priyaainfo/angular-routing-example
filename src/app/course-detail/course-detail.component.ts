import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { courseList } from '../course-list/course-list-data';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  courseObj: any;
  id;
  name;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.courseObj = courseList[this.activatedRoute.snapshot.paramMap.get('id')];
    this.activatedRoute.queryParams.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.name = params['name'];
    });
  }

}
