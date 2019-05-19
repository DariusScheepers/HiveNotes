import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { LevelUpComponent } from './level-up.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonComponentsModule } from '../common/common-components.module';

@NgModule({
  declarations: [LevelUpComponent, CourseComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonComponentsModule
  ],
  exports: [
    LevelUpComponent,
    CourseComponent
  ]
})
export class LevelUpModule { }
