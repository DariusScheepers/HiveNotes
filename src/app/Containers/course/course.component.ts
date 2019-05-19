import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { DataService } from 'src/app/Services/data/data.service';
import { Module } from 'src/app/Models/module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.setCourse();
  }

  setCourse() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.course = this.dataService.getCourseById(id);
      } 
    });
  }


}
