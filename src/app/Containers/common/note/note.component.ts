import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/Models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;

  @Output() delete: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteSelf(){
    this.delete.emit(this.note);
  }

}
