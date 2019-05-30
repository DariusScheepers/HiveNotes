import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Module } from 'src/app/Models/module';
import { DatabaseService } from 'src/app/Services/database/database.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

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
        let id = +params['id'];
        const rec = this.databaseService.getModuleById(id);
        if (rec) {
          rec.subscribe(module => this.module = module);
        } else {
          //this.module = new Module(2, 'Dont Net Core', 'Dont think you are done yet.');
        }
      } 
    });
  }

}
