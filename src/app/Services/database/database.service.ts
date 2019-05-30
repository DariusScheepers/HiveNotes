import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/Models/course';
import { CourseFromRest } from '../../DTO/course.js';
import { User } from 'src/app/Models/user.js';
import { Module } from 'src/app/Models/module.js';
import { Note } from 'src/app/Models/note.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  // use this to pass in the user's ID to get the relevant notes.
  userID: number;

  private coursesUrl = 'http://localhost:3000/api/hive/courses';

  constructor(private http: HttpClient) { }

  startup() {}

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

  getUserAuthentication(userBeingVerifiedID: string): Observable<User> {
    // TODO: replace with http request
    return new Observable;
  }

  getCourseById(coursId: number): Observable<Course> {
    return null;
  }

  getModuleById(moduleId: number): Observable<Module> {
    return null;
  }

  getNotesByModuleId(moduleId: number): Observable<Note[]> {
    return null;
  }

  postNote(note: Note) {

  }
}
