import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Module } from 'src/app/Models/module';
import { DataService } from 'src/app/Services/data/data.service';
import { Note } from 'src/app/Models/note';

function createNewNoteFormGroup() {
  const fb = new FormBuilder();
  return fb.group({
    name: fb.control(null, null),
    content: fb.control(null, null)
  });
}

@Component({
  selector: 'app-note-panel',
  templateUrl: './note-panel.component.html',
  styleUrls: ['./note-panel.component.scss']
})
export class NotePanelComponent implements OnInit {
  
  @Input() module: Module;
  notes: Note[] = [];

  newNoteForm: FormGroup;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setNotes();
  }

  setNotes() {
    this.notes = this.dataService.getNotesByModuleId(this.module.id);
  }

  setNewNoteForm() {
    this.newNoteForm = createNewNoteFormGroup();
  }

  addNewNote(newNoteFormValues) {
    console.log(newNoteFormValues);
    const id = this.notes.length;
    let newNote = new Note(id, newNoteFormValues.name, newNoteFormValues.content, this.module);
    this.dataService.addNote(newNote);

    this.setNotes();
  }

}
