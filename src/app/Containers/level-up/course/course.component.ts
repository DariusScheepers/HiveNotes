import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Module } from 'src/app/Models/module';
import { DatabaseService } from 'src/app/Services/database/database.service';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;
  modules: Module[];

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.databaseService.getCourse(id).subscribe(course => this.course = course);
        this.databaseService.getModules(id).subscribe(modules => this.modules = modules);
      } 
    });
  }
}
