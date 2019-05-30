import { Component, OnInit } from '@angular/core';
import { CourseBrief } from 'src/app/Models/course';
import { DatabaseService } from 'src/app/Services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  courses: CourseBrief[];

  constructor(private databaseService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.databaseService.getAllCoursesBrief().subscribe(courses => this.courses = courses);
  }

  goToCourse(courseId: string): void {
    this.router.navigateByUrl(`/course/${courseId}`);
  }

  getIconPath(index) {
    return `../../../assets/icons/icon-${index}.svg`;
  }

}
