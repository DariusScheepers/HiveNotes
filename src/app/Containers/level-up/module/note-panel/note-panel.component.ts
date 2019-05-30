import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/app/Models/module';
import { DataService } from 'src/app/Services/data/data.service';
import { Note } from 'src/app/Models/note';

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
    let id = this.notes.length; // Id should be auto set.
    let new_Note = new Note(id, this.newNote.name, this.newNote.content, this.module);
    console.log('Note added: ', new_Note);
    this.notes.push(new_Note);
    this.dataService.addNote(new_Note);

    this.setNotes();
  }

  deleteNote(noteId: number){
    this.dataService.deleteNote(noteId);
    console.log("delete id: " + noteId);
    this.setNotes();
  }

}
