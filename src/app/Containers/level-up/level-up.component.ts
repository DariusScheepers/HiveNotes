import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';
import { Course } from 'src/app/Models/course';

@Component({
  selector: 'app-level-up',
  templateUrl: './level-up.component.html',
  styleUrls: ['./level-up.component.scss']
})
export class LevelUpComponent implements OnInit {

  courses: Course[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setCourses();
  }

  setCourses() {
    this.courses = this.dataService.getAllCourses();
  }

}
