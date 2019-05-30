import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Note } from 'src/app/Models/note';
import { DatabaseService } from '../database/database.service';
import { TestDataService } from '../test-data/test-data.service';
import { Module } from 'src/app/Models/module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private courses: Course[] = [];
  public notes: Note[] = [];
  private modules: Module[] = [];

  constructor(
    private databaseService: DatabaseService,
    private testDataService: TestDataService) { }

  startup() {
    this.loadData();
    
    this.getTestData(); // TODO: remove for when able to use db.
  }

  private loadData() {
    const courses = []; // this.databaseService.getAllFromTable('Course');
    this.loadCoursesAndModules(courses);
    const notes = [] // TODO: figure out where to store users and notes. Is the bbd-learning database writable?
    this.loadNotes(notes);
  }

  private loadCoursesAndModules(courses: Course[]) {
    this.courses = courses;
    this.courses.forEach(course => {
      // this.databaseService.getSpecifiedFKFromTable('Module', course.id, 'Course');
      this.modules.push(...course.modules);
    });
  }

  private loadNotes(notes: Note[]) {
    this.notes = notes;
  }

  private getTestData() {
    const courses = this.testDataService.createCoursesAndModules();  
    this.loadCoursesAndModules(courses);
    
    //const notes = this.testDataService.createNotes(); 
   // this.loadNotes(notes);
  }

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course {
    return this.courses.filter(course => {
      return course.id === id;
    })[0];
  }

  getAllModules(): Module[] {
    return this.modules;
  }

  getModuleById(id: number): Module {
    return this.modules.filter(module => {
      return module.id === id;
    })[0];
  }

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNotesByModuleId(id: number): Note[] {
    return this.notes.filter(note => {
      return note.parentModule.id === id;
    });
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  deleteNote(noteId: number){
    this.notes[noteId] = this.notes[this.notes.length-1];
    this.notes[noteId].id = noteId;
    this.notes.pop();
  }
}
