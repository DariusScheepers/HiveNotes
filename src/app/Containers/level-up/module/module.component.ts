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
    this.getModule();
  }

  getModule() {
    this.route.params.forEach((params: Params) => {
      if (params['moduleId'] !== undefined) {
        const id = +params['moduleId'];
        this.databaseService.getModule(id).subscribe(module => this.module = module);
      } 
    });
  }

}
