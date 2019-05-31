import { Injectable } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { Module } from 'src/app/Models/module';
import { Note } from 'src/app/Models/note';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  userId = 0;

  courses: Course[] = [];
  notes: Note[] = [];
  modules: Module[] = [];

  constructor() { }

  createTestContent() {
    this.createCoursesAndModules();
  }

  createCoursesAndModules(): Course[] {
    return [];
  }

  createNotes() {
    const module1 = this.modules[0];
    const note1 = new Note(0, 'What the hell is this?', 'This makes no sense!', module1, this.userId);
    
    this.notes.push(note1);
    return this.notes;
  }
}
