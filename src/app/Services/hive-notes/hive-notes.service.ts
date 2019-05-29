import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class HiveNotesService {

  constructor(private dataService: DataService) { }

  startup() {
    this.dataService.startup();
  }
}