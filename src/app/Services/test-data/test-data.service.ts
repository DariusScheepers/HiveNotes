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
    const introductionModule = new Module(1, 'Introduction', 'If you can see this, well done!'); // IDs should be auto set.
    const dotnetCoreModule = new Module(2, 'Dont Net Core', 'Dont think you are done yet.');
    const cSharpModules = [introductionModule, dotnetCoreModule];
    const cSharpCourse = new Course(1, 'C#', cSharpModules);

    cSharpCourse.modules.forEach(module => {
      this.modules.push(module);
    })
    this.courses.push(cSharpCourse);
    return this.courses;
  }

  createNotes() {
    const module1 = this.modules[0];
    const note1 = new Note('What the hell is this?', 'This makes no sense!', module1, this.userId);
    
    this.notes.push(note1);
    return this.notes;
  }
}
