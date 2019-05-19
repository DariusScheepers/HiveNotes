import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelUpComponent } from './level-up/level-up.component';
import { HiveNotesComponent } from './hive-notes.component';
import { CourseComponent } from './course/course.component';
import { AppRoutingModule } from '../app-routing.module';
import { ModuleModule } from './module/module.module';
import { CommonComponentsModule } from './common/common-components.module';

@NgModule({
  declarations: [LevelUpComponent, HiveNotesComponent, CourseComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuleModule,
    CommonComponentsModule
  ],
  exports: [
    HiveNotesComponent,
    LevelUpComponent,
    CourseComponent
  ]
})
export class ContainersModule { }
