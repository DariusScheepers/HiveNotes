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

import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavContentComponent } from './side-nav/side-nav-content/side-nav-content.component';
@NgModule({
  declarations: [HiveNotesComponent, PageContentComponent, SideNavComponent, SideNavContentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ModuleModule,
    CommonComponentsModule,
    LevelUpModule,

    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  exports: [HiveNotesComponent, PageContentComponent, SideNavComponent, SideNavContentComponent]
})
export class ContainersModule { }
