import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Module } from 'src/app/Models/module';
import { Note } from 'src/app/Models/note';
import { DatabaseService } from 'src/app/Services/database/database.service';

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

  get userID(): number {
    return this.databaseService.userID;
  }

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.setNotes();
    this.setNewNoteForm();
  }

  setNotes() {
    const rec = this.databaseService.getNotesByModuleId(this.module.id);
    if (rec) {
      rec.subscribe(notes => this.notes = notes);
    }
    this.notes = [new Note('What the hell is this?', 'This makes no sense!', new Module(1,''), 1)]; // FIXME?
  }

  setNewNoteForm() {
    this.newNote = new Note('','',null, this.userID);
  }

  addNewNote() {
    console.log('Note added: ', this.newNote);
    let newNote = new Note(this.newNote.name, this.newNote.content, this.module, this.userID);
    this.databaseService.postNote(newNote);

    this.setNotes();
  }

}
