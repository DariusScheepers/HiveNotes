import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ModuleModule } from './level-up/module/module.module';
import { CommonComponentsModule } from './common/common-components.module';
import { LevelUpModule } from './level-up/level-up.module';
import { HiveNotesComponent } from './hive-notes/hive-notes.component';
import { PageContentComponent } from '../Containers/page-content/page-content.component';
import { ModuleComponent } from './level-up/module/module.component';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HiveNotesComponent, PageContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuleModule,
    CommonComponentsModule,
    LevelUpModule,

    MatSidenavModule,
    BrowserAnimationsModule
  ],
  exports: [HiveNotesComponent, PageContentComponent, SideNavComponent]
})
export class ContainersModule { }
