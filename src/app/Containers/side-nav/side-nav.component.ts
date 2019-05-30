import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/Models/module';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
  module: Module;

  constructor(
    private route: ActivatedRoute,
    private databaseService: DatabaseService) { }

  ngOnInit() {
    this.setModule();
  }

  setModule() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        const rec = this.databaseService.getModuleById(id);
        if (rec) {
          rec.subscribe(module => this.module = module);
        } else {
          this.module = new Module(id, 'Dont think you are done yet.');
        }
      }
    });
  }
}
