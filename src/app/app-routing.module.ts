import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LevelUpComponent } from './Containers/level-up/level-up.component';
import { CourseComponent } from './Containers/level-up/course/course.component';
import { ModuleComponent } from './Containers/level-up/module/module.component';
import { SideNavContentComponent } from './Containers/side-nav/side-nav-content/side-nav-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'level-up', pathMatch: 'full' },
  { path: 'level-up', component: LevelUpComponent },
  { path: 'course/:courseId/module/:moduleId', component: ModuleComponent },
  { path: 'course/:courseId', component: CourseComponent },
  { path: 'note', component: SideNavContentComponent, outlet: "sidebar"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
