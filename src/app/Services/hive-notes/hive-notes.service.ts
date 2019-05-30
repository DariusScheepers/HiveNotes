import { Injectable } from '@angular/core';
import { DatabaseService } from '../database/database.service';

@Injectable({
  providedIn: 'root'
})
export class HiveNotesService {

  constructor(private databaseService: DatabaseService) { }

  startup() {
    this.databaseService.startup();
  }
}
