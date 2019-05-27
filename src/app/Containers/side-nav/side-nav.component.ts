import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/Models/module';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  
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
