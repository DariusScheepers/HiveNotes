import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { CourseFromRest } from '../../DTO/course.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private coursesUrl = 'http://localhost:3000/api/hive/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<CourseFromRest[]>(this.coursesUrl).pipe(map(courseJsons => courseJsons.map(
      courseJson => new Course(
        courseJson.CourseId,
        courseJson.Name,
        null, // FIXME: remove?
        courseJson.Description
      )
    )));
  }
}
