import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'src/app/Models/module';
import { Note } from 'src/app/Models/note';
import { DatabaseService } from 'src/app/Services/database/database.service';
import { DataService } from 'src/app/Services/data/data.service';

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
    return 0;
    // return this.databaseService.userID;
  }

  constructor(private dataService: DataService, private databaseService: DatabaseService) { }

  ngOnInit() {
    this.setNotes();
    this.setNewNoteForm();
  }

  setNotes() {
    const rec = this.dataService.getNotesByModuleId(this.module.id);
    this.notes=rec;
    // if (rec) {
    //   rec.map(note => this.notes = note)
    //   rec.subscribe(notes => this.notes = notes);
    // }
  }

  setNewNoteForm() {
    this.newNote = new Note(0,'','',null, this.userID);
  }

  addNewNote() {

    let id = this.notes.length;
    let new_Note = new Note(id, this.newNote.name, this.newNote.content, this.module, this.userID);
    // console.log('Note added: ', new_Note);
    this.notes.push(new_Note);
    this.dataService.addNote(new_Note);
    // this.dataService.addNote(new_Note);

    this.setNotes();
  }

  deleteNote(noteId: number){
    this.dataService.deleteNote(noteId);
    console.log("delete id: " + noteId);
    this.setNotes();
  }

}
