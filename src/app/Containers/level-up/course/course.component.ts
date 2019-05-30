import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Module } from 'src/app/Models/module';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService) { }

  ngOnInit() {
    this.setCourse();
  }

  setCourse() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        const rec = this.databaseService.getCourseById(id);
        if (rec) {
          rec.subscribe(course => this.course = course);
        } else {
          this.course = new Course(1, 'C#', [null]);
        }

      } 
    });
  }


}
