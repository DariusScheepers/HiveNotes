import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { CourseJson } from '../database/json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private coursesUrl = 'localhost:3000/api/hive/courses';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<CourseJson[]>(this.coursesUrl).pipe(map(courseJsons => courseJsons.map(courseJson => new Course(
      courseJson.CourseId,
      courseJson.Name,
      null,
      courseJson.Description
    ))));
  }
}
