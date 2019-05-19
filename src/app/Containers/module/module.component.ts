import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data/data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Module } from 'src/app/Models/module';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  module: Module;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    this.setModule();
  }

  setModule() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.module = this.dataService.getModuleById(id);
      } 
    });
  }

}
