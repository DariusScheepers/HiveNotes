import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleComponent } from './module.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ModuleContentComponent } from './module-content/module-content.component';
import { NotePanelComponent } from './note-panel/note-panel.component';
import { CommonComponentsModule } from '../../common/common-components.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, MatError } from '@angular/material';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ModuleComponent, ModuleContentComponent, NotePanelComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonComponentsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  exports: [
    ModuleComponent,
    ModuleContentComponent,
    NotePanelComponent
  ]
})
export class ModuleModule { }
