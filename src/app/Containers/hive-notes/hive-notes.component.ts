import { Component, OnInit } from '@angular/core';
import { HiveNotesService } from '../../Services/hive-notes/hive-notes.service';

@Component({
  selector: 'app-hive-notes',
  templateUrl: './hive-notes.component.html',
  styleUrls: ['./hive-notes.component.scss']
})
export class HiveNotesComponent implements OnInit {

  constructor(private hiveNotesService: HiveNotesService) { }
  
  loggedIn: boolean = false;

  ngOnInit() {
    this.hiveNotesService.startup();
  }

  userLoggedIn() {
    this.loggedIn = true;
  }

}
