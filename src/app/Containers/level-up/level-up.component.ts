import { Component, OnInit } from '@angular/core';
import { CourseBrief } from 'src/app/Models/course';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  courses: CourseBrief[];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.databaseService.getAllCoursesBrief().subscribe(courses => this.courses = courses);
  }

}
