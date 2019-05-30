import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseBrief, Course } from 'src/app/Models/course';
import { CourseFromRest } from '../../DTO/course.js';
import { Module } from 'src/app/Models/module.js';
import { ModuleFromRest } from 'src/app/DTO/module.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private courseUrl = 'http://localhost:3000/api/hive/course';
  private coursesUrl = 'http://localhost:3000/api/hive/courses';

  constructor(private http: HttpClient) { }

  getCourse(courseId: number): Observable<Course> {
    return this.http.get<CourseFromRest>(`${this.courseUrl}/${courseId}`).pipe(map(course => new Course(
      course.courseId,
      course.name,
      course.description
    )));
  }

  getModules(courseId: number): Observable<Module[]> {
    return this.http.get<ModuleFromRest[]>(`${this.courseUrl}/${courseId}/modules`).pipe(map(modules => modules.map(
      module => new Module(
        module.id,
        module.name
      )
    )));
  }

  getAllCoursesBrief(): Observable<CourseBrief[]> {
    return this.http.get<CourseFromRest[]>(this.coursesUrl).pipe(map(courses => courses.map(
      course => new CourseBrief(
        course.courseId,
        course.name
      )
    )));
  }
}
