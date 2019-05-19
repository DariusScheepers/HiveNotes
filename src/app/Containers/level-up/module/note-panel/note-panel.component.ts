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

  newNote: Note;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setNotes();
    this.setNewNoteForm();
  }

  setNotes() {
    this.notes = this.dataService.getNotesByModuleId(this.module.id);
  }

  setNewNoteForm() {
    this.newNote = new Note(0,'','',null);
  }

  addNewNote() {
    console.log('Note added: ', this.newNote);
    const id = this.notes.length; // Id should be auto set.
    let newNote = new Note(id, this.newNote.name, this.newNote.content, this.module);
    this.dataService.addNote(newNote);

    this.setNotes();
  }

}
