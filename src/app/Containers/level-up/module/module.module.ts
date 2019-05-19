import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModuleContentComponent } from './module-content/module-content.component';
import { NotePanelComponent } from './note-panel/note-panel.component';
import { CommonComponentsModule } from '../../common/common-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModuleComponent, ModuleContentComponent, NotePanelComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonComponentsModule,
    FormsModule
  ],
  exports: [
    ModuleComponent,
    ModuleContentComponent,
    NotePanelComponent
  ]
})
export class ModuleModule { }
