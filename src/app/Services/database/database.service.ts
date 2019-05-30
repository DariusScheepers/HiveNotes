import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { CourseFromRest } from '../../DTO/course.js';
import { DataService } from '../data/data.service.js';
import { User } from 'src/app/Models/user.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private coursesUrl = 'http://localhost:3000/api/hive/courses';

  constructor(private http: HttpClient, private dataService: DataService) { }

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

  getUserAuthentication(userID: string): Observable<User> {
    // TODO: replace with http request
    return new Observable;
  }

  // use this to pass in the user's ID to get the relevant notes.
  getUserID(): string {
    return this.dataService.userID;
  }
}
