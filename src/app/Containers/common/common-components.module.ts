import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import {MatCardModule, MatCard} from '@angular/material/card';
import { MaterialModule } from 'src/material-module';
@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NoteComponent
  ]
})
export class CommonComponentsModule { }
