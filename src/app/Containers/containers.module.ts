import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ModuleModule } from './level-up/module/module.module';
import { CommonComponentsModule } from './common/common-components.module';
import { LevelUpModule } from './level-up/level-up.module';
import { HiveNotesComponent } from './hive-notes.component';

@NgModule({
  declarations: [HiveNotesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuleModule,
    CommonComponentsModule,
    LevelUpModule
  ],
  exports: [HiveNotesComponent]
})
export class ContainersModule { }
